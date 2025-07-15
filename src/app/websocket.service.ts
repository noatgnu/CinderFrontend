import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {AccountsService} from "./accounts/accounts.service";
import {WebSocketSubject} from "rxjs/internal/observable/dom/WebSocketSubject";
import {Subject, timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  baseURL = environment.baseURL.replace("http", "ws")
  searchWSConnection?: WebSocketSubject<{
    "type": string,
    "status": "in_progress"|"complete"|"error"|"started",
    "id": string,
    "found_files": number,
    "current_progress": number,
    "error": string,
    "file": string,
    "instance_id": string
  }>

  curtainWSConnection?: WebSocketSubject<{
    "type": string,
    "status": "in_progress"|"complete"|"error"|"started"|"downloading"|"download_complete"|"partial_success",
    "analysis_group_id"?: number,
    "id"?: number,
    "downloaded_bytes"?: number,
    "total_bytes"?: number,
    "percentage"?: number,
    "message"?: string,
    "error"?: string,
    // Enhanced progress message fields (backward compatible)
    "overall_progress"?: number,
    "current_phase"?: string,
    "phase_progress"?: number,
    "details"?: {
      "step"?: string,
      "current_type"?: string,
      "completed_task"?: string,
      "total_tasks"?: number,
      "downloaded_bytes"?: number,
      "total_bytes"?: number
    },
    "timestamp"?: string,
    "estimated_remaining_seconds"?: number,
    // Partial failure fields
    "successful_operations"?: string[],
    "failed_operations"?: {[key: string]: string},
    // Phase completion fields
    "phase"?: string
  }>
  connectedWS: boolean = false
  connectedCurtainWS: boolean = false
  lostConnectionSubject: Subject<string> = new Subject<string>()
  
  // Activity tracking for automatic reconnection
  private searchActiveOperations: Set<string> = new Set()
  private curtainActiveOperations: Set<string> = new Set()
  private searchReconnectAttempts: number = 0
  private curtainReconnectAttempts: number = 0
  private maxReconnectAttempts: number = 5
  private searchSessionID?: string
  private curtainSessionID?: string
  
  // Connection state tracking
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
          console.log("Connected to search websocket")
        }
      },
      closeObserver: {
        next: () => {
          console.log("Closed connection to search websocket")
          this.connectedWS = false
          this.searchConnectionLostTime = new Date()
          
          // Check if we should automatically reconnect
          if (this.searchActiveOperations.size > 0 && this.searchReconnectAttempts < this.maxReconnectAttempts) {
            console.log(`Search operations active (${this.searchActiveOperations.size}), attempting auto-reconnect ${this.searchReconnectAttempts + 1}/${this.maxReconnectAttempts}`)
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
          console.log("Connected to curtain websocket")
        }
      },
      closeObserver: {
        next: () => {
          console.log("Closed connection to curtain websocket")
          this.connectedCurtainWS = false
          this.curtainConnectionLostTime = new Date()
          
          // Check if we should automatically reconnect
          if (this.curtainActiveOperations.size > 0 && this.curtainReconnectAttempts < this.maxReconnectAttempts) {
            console.log(`Curtain operations active (${this.curtainActiveOperations.size}), attempting auto-reconnect ${this.curtainReconnectAttempts + 1}/${this.maxReconnectAttempts}`)
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

  // Activity tracking methods
  addSearchOperation(operationId: string) {
    this.searchActiveOperations.add(operationId)
    console.log(`Added search operation: ${operationId}`)
  }

  removeSearchOperation(operationId: string) {
    this.searchActiveOperations.delete(operationId)
    console.log(`Removed search operation: ${operationId}`)
  }

  addCurtainOperation(operationId: string) {
    this.curtainActiveOperations.add(operationId)
    console.log(`Added curtain operation: ${operationId}`)
  }

  removeCurtainOperation(operationId: string) {
    this.curtainActiveOperations.delete(operationId)
    console.log(`Removed curtain operation: ${operationId}`)
  }

  // Reconnection methods
  private attemptSearchReconnect() {
    this.searchReconnectAttempts++
    const delay = Math.min(1000 * Math.pow(2, this.searchReconnectAttempts - 1), 30000) // Exponential backoff, max 30s
    
    timer(delay).subscribe(() => {
      if (this.searchSessionID) {
        console.log(`Attempting to reconnect search WebSocket (attempt ${this.searchReconnectAttempts}/${this.maxReconnectAttempts})`)
        this.connectSearchWS(this.searchSessionID)
      }
    })
  }

  private attemptCurtainReconnect() {
    this.curtainReconnectAttempts++
    const delay = Math.min(1000 * Math.pow(2, this.curtainReconnectAttempts - 1), 30000) // Exponential backoff, max 30s
    
    timer(delay).subscribe(() => {
      if (this.curtainSessionID) {
        console.log(`Attempting to reconnect curtain WebSocket (attempt ${this.curtainReconnectAttempts}/${this.maxReconnectAttempts})`)
        this.connectCurtainWS(this.curtainSessionID)
      }
    })
  }

  // Manual reconnection methods for user-initiated reconnects
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

  // Check if connections are lost and for how long
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
