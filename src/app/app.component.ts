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
    this.ws.lostConnectionSubject.subscribe((data) => {
      if (data) {
        this.sb.open("Lost push notification connection to server. Refresh to restore.", "Dismiss")
      }
    })

    this.web.searchSessionID = localStorage.getItem("cinderSearchSessionID")
    this.login().then(
      (loggedIn) => {
        if (!this.web.searchSessionID) {
          this.web.getSearchSessionID().subscribe((data) => {
            this.ws.connectSearchWS(data)
            localStorage.setItem("cinderSearchSessionID", data)
            this.web.searchSessionID = data
            this.ws.searchWSConnection?.subscribe((data) => {
              if (data) {
                if (data["type"] === "search_status") {

                  switch (data["status"]) {
                    case "error":
                      this.sb.open("Search failed", "Dismiss", {duration: 2000})
                      break
                    case "started":
                      this.sb.open("Search started", "Dismiss", {duration: 2000})
                      break
                    case "in_progress":
                      this.sb.open(`Search in progress: ${data["current_progress"]}/${data["found_files"]}`, "Dismiss", {duration: 2000})
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
          this.ws.searchWSConnection?.subscribe((data) => {
            if (data) {
              console.log(data)
              if (data.type === "logout") {
                this.accounts.logout()
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
