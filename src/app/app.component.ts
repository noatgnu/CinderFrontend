import {AfterViewInit, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {AccountsService} from "./accounts/accounts.service";
import {WebsocketService} from "./websocket.service";
import {WebService} from "./web.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'CinderNG';

  ready: boolean = false;

  constructor(private web: WebService, private accounts: AccountsService, private ws: WebsocketService, private sb: MatSnackBar) {

  }

  ngAfterViewInit() {
    this.ws.lostConnectionSubject.subscribe((connectionType) => {
      if (connectionType) {
        const status = connectionType === 'search' ? this.ws.getSearchConnectionStatus() : this.ws.getCurtainConnectionStatus()
        
        if (status.hasActiveOperations) {
          // Active operations - show information that auto-reconnect failed
          this.sb.open(`Lost ${connectionType} connection during active operations. Auto-reconnect failed.`, "Refresh", {
            duration: 0 // Persistent message
          }).onAction().subscribe(() => {
            window.location.reload()
          })
        } else {
          // No active operations - offer manual reconnection
          this.sb.open(`Lost ${connectionType} connection. Click to reconnect.`, "Reconnect", {
            duration: 10000
          }).onAction().subscribe(() => {
            const success = connectionType === 'search' ? this.ws.manualReconnectSearch() : this.ws.manualReconnectCurtain()
            if (success) {
              this.sb.open(`Reconnecting to ${connectionType}...`, "Dismiss", { duration: 3000 })
            } else {
              this.sb.open(`Failed to reconnect to ${connectionType}. Please refresh the page.`, "Refresh", {
                duration: 0
              }).onAction().subscribe(() => {
                window.location.reload()
              })
            }
          })
        }
      }
    })

    this.web.searchSessionID = localStorage.getItem("cinderSearchSessionID")
    this.login().then(
      (loggedIn) => {
        if (!this.web.searchSessionID) {
          this.web.getSearchSessionID().subscribe((data) => {
            this.ws.connectSearchWS(data)
            this.ws.connectCurtainWS(data)
            localStorage.setItem("cinderSearchSessionID", data)
            this.web.searchSessionID = data
            this.ws.searchWSConnection?.subscribe((data) => {
              if (data) {
                if (data["type"] === "search_status") {

                  switch (data["status"]) {
                    case "error":
                      this.sb.open("Search failed", "Dismiss", {duration: 2000})
                      this.ws.removeSearchOperation(data["id"])
                      break
                    case "started":
                      this.sb.open("Search started", "Dismiss", {duration: 2000})
                      this.ws.addSearchOperation(data["id"])
                      break
                    case "in_progress":
                      this.sb.open(`Search in progress: ${data["current_progress"]}/${data["found_files"]}`, "Dismiss", {duration: 2000})
                      this.ws.addSearchOperation(data["id"])
                      break
                    case "complete":
                      this.ws.removeSearchOperation(data["id"])
                      break
                  }
                }
              }
            })
            this.ws.connectSearchWS(data)
            this.ws.curtainWSConnection?.subscribe((data) => {
              if (data) {}
            })
          })
        } else {
          this.ws.connectSearchWS(this.web.searchSessionID)
          this.ws.connectCurtainWS(this.web.searchSessionID)
          this.ws.searchWSConnection?.subscribe((data) => {
            if (data) {
              console.log(data)
              if (data.type === "logout") {
                this.accounts.logout()
              } else if (data.type === "search_status") {
                switch (data.status) {
                  case "error":
                  case "complete":
                    this.ws.removeSearchOperation(data.id)
                    break
                  case "started":
                  case "in_progress":
                    this.ws.addSearchOperation(data.id)
                    break
                }
              }
            }
          })
          //this.ws.connectCurtainWS(this.web.searchSessionID)
          this.ws.curtainWSConnection?.subscribe((data) => {
            if (data) {}
          })
        }
        this.ready = true
        if (loggedIn) {
          this.web.getCurrentUser().subscribe((data) => {
            if (data) {
              this.accounts.currentUser = data
            }
          })
        }
      }
    )
  }

  async login() {
    this.accounts.loadAuthFromStorage()
    if (!this.accounts.loggedIn) {
      try {
        const resp = await this.web.getCSRFToken().toPromise()
        if (resp) {
          if (resp.status === 200) {
            try {
              const userSession = await this.web.getAuthenticationStatus().toPromise()
              if (userSession) {
                if (userSession.status === 200) {
                  this.accounts.userSession = userSession
                  this.accounts.loggedIn = true
                }
              }
            } catch (e) {
              console.log(e)
            }
          }
        }
      } catch (e) {
        console.log(e)
      }


    }
    return this.accounts.loggedIn
  }
}
