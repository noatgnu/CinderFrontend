import { Injectable, signal, WritableSignal } from '@angular/core';
import {environment} from "../environments/environment";
import {AccountsService} from "./accounts/accounts.service";
import {WebSocketSubject} from "rxjs/internal/observable/dom/WebSocketSubject";
import {Subject, timer} from "rxjs";

export interface OperationProgress {
  id: string;
  type: 'search' | 'curtain';
  status: string;
  progress: number;
  message?: string;
  label?: string;
}

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  baseURL = environment.baseURL.replace("http", "ws")
  
  public activeOperations: WritableSignal<OperationProgress[]> = signal([]);

  updateOperationProgress(id: string, type: 'search' | 'curtain', status: string, progress: number, message?: string, label?: string) {
    if (!id) return;
    
    const validatedProgress = (isNaN(progress) || progress === null || progress === undefined) ? 0 : progress;

    this.activeOperations.update(ops => {
      const index = ops.findIndex(o => o.id === id);
      if (index !== -1) {
        ops[index] = { 
          ...ops[index], 
          status: status || ops[index].status, 
          progress: validatedProgress, 
          message: message || ops[index].message, 
          label: label || ops[index].label 
        };
        return [...ops];
      } else {
        return [...ops, { id, type, status, progress: validatedProgress, message, label }];
      }
    });
  }

  removeOperation(id: string) {
    this.activeOperations.update(ops => ops.filter(o => o.id !== id));
  }

  searchWSConnection?: WebSocketSubject<any>
  curtainWSConnection?: WebSocketSubject<any>
  
  connectedWS: boolean = false
  connectedCurtainWS: boolean = false
  lostConnectionSubject: Subject<string> = new Subject<string>()
  
  private searchActiveOperations: Set<string> = new Set()
  private curtainActiveOperations: Set<string> = new Set()
  private searchReconnectAttempts: number = 0
  private curtainReconnectAttempts: number = 0
  private maxReconnectAttempts: number = 5
  private searchSessionID?: string
  private curtainSessionID?: string
  
  searchConnectionLostTime?: Date
  curtainConnectionLostTime?: Date

  constructor(private accounts: AccountsService) { }

  connectSearchWS(sessionID: string) {
    this.searchSessionID = sessionID
    this.searchWSConnection = new WebSocketSubject({
      url: `${this.baseURL}/ws/search/${sessionID}/?token=${this.accounts.token}`,
      openObserver: {
        next: () => {
          this.connectedWS = true
          this.searchReconnectAttempts = 0
          this.searchConnectionLostTime = undefined
        }
      },
      closeObserver: {
        next: () => {
          this.connectedWS = false
          this.searchConnectionLostTime = new Date()
          if (this.searchActiveOperations.size > 0 && this.searchReconnectAttempts < this.maxReconnectAttempts) {
            this.attemptSearchReconnect()
          } else {
            this.lostConnectionSubject.next("search")
          }
        }
      }
    })
  }

  connectCurtainWS(sessionID: string) {
    this.curtainSessionID = sessionID
    this.curtainWSConnection = new WebSocketSubject({
      url: `${this.baseURL}/ws/curtain/${sessionID}/?token=${this.accounts.token}`,
      openObserver: {
        next: () => {
          this.connectedCurtainWS = true
          this.curtainReconnectAttempts = 0
          this.curtainConnectionLostTime = undefined
        }
      },
      closeObserver: {
        next: () => {
          this.connectedCurtainWS = false
          this.curtainConnectionLostTime = new Date()
          if (this.curtainActiveOperations.size > 0 && this.curtainReconnectAttempts < this.maxReconnectAttempts) {
            this.attemptCurtainReconnect()
          } else {
            this.lostConnectionSubject.next("curtain")
          }
        }
      }
    })
  }

  closeSearchWS() {
    if (this.searchWSConnection) {
      this.searchWSConnection.unsubscribe()
    }
  }

  closeCurtainWS() {
    if (this.curtainWSConnection) {
      this.curtainWSConnection.unsubscribe()
    }
  }

  addSearchOperation(operationId: string, label?: string) {
    this.searchActiveOperations.add(operationId)
    this.updateOperationProgress(operationId, 'search', 'started', 0, 'Starting search...', label || 'Search Operation');
  }

  removeSearchOperation(operationId: string) {
    this.searchActiveOperations.delete(operationId)
    this.removeOperation(operationId)
  }

  addCurtainOperation(operationId: string, label?: string) {
    this.curtainActiveOperations.add(operationId)
    this.updateOperationProgress(operationId, 'curtain', 'started', 0, 'Initialising...', label || 'Curtain Import');
  }

  removeCurtainOperation(operationId: string) {
    this.curtainActiveOperations.delete(operationId)
    this.removeOperation(operationId)
  }

  private attemptSearchReconnect() {
    this.searchReconnectAttempts++
    const delay = Math.min(1000 * Math.pow(2, this.searchReconnectAttempts - 1), 30000)
    timer(delay).subscribe(() => {
      if (this.searchSessionID) {
        this.connectSearchWS(this.searchSessionID)
      }
    })
  }

  private attemptCurtainReconnect() {
    this.curtainReconnectAttempts++
    const delay = Math.min(1000 * Math.pow(2, this.curtainReconnectAttempts - 1), 30000)
    timer(delay).subscribe(() => {
      if (this.curtainSessionID) {
        this.connectCurtainWS(this.curtainSessionID)
      }
    })
  }

  manualReconnectSearch(): boolean {
    if (this.searchSessionID) {
      this.searchReconnectAttempts = 0
      this.connectSearchWS(this.searchSessionID)
      return true
    }
    return false
  }

  manualReconnectCurtain(): boolean {
    if (this.curtainSessionID) {
      this.curtainReconnectAttempts = 0
      this.connectCurtainWS(this.curtainSessionID)
      return true
    }
    return false
  }

  getSearchConnectionStatus(): { connected: boolean, lostTime?: Date, hasActiveOperations: boolean } {
    return {
      connected: this.connectedWS,
      lostTime: this.searchConnectionLostTime,
      hasActiveOperations: this.searchActiveOperations.size > 0
    }
  }

  getCurtainConnectionStatus(): { connected: boolean, lostTime?: Date, hasActiveOperations: boolean } {
    return {
      connected: this.connectedCurtainWS,
      lostTime: this.curtainConnectionLostTime,
      hasActiveOperations: this.curtainActiveOperations.size > 0
    }
  }
}
