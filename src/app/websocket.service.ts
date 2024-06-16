import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {AccountsService} from "./accounts/accounts.service";
import {WebSocketSubject} from "rxjs/internal/observable/dom/WebSocketSubject";

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
    "error": string
  }>


  constructor(private accounts: AccountsService) { }

  connectSearchWS(sessionID: string) {
    this.searchWSConnection = new WebSocketSubject({
      url: `${this.baseURL}/ws/search/${sessionID}/?token=${this.accounts.token}`,
      openObserver: {
        next: () => {
          console.log("Connected to search websocket")
        }
      },
      closeObserver: {
        next: () => {
          console.log("Closed connection to search websocket")
        }
      }
    })
  }

  closeSearchWS() {
    if (this.searchWSConnection) {
      this.searchWSConnection.unsubscribe()
    }
  }
}
