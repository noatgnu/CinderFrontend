import {AfterViewInit, Component, effect, Renderer2} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {AccountsService} from "./accounts/accounts.service";
import {WebsocketService} from "./websocket.service";
import {WebService} from "./web.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UiSettingsService} from "./ui-settings.service";
import {OperationCenterComponent} from "./shared/operation-center/operation-center.component";
import {CommandPaletteComponent} from "./shared/command-palette/command-palette.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, OperationCenterComponent, CommandPaletteComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'CinderNG';

  ready: boolean = false;

  constructor(
    private web: WebService,
    private accounts: AccountsService,
    private ws: WebsocketService,
    private sb: MatSnackBar,
    public uiSettings: UiSettingsService,
    private renderer: Renderer2
  ) {
    // Effect to toggle compact-mode class on the body element
    effect(() => {
      if (this.uiSettings.compactMode()) {
        this.renderer.addClass(document.body, 'compact-mode');
      } else {
        this.renderer.removeClass(document.body, 'compact-mode');
      }
    });
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
                      this.ws.removeOperation(data["id"])
                      break
                    case "started":
                      this.sb.open("Search started", "Dismiss", {duration: 2000})
                      this.ws.addSearchOperation(data["id"])
                      this.ws.updateOperationProgress(data["id"], 'search', 'started', 0, 'Search started', 'Search Operation');
                      break
                    case "in_progress":
                      const progress = (data["current_progress"] / data["found_files"]) * 100;
                      this.ws.addSearchOperation(data["id"])
                      this.ws.updateOperationProgress(data["id"], 'search', 'in_progress', progress, `Processed ${data["current_progress"]}/${data["found_files"]}`, 'Search Operation');
                      break
                    case "complete":
                      this.ws.removeSearchOperation(data["id"])
                      this.ws.removeOperation(data["id"])
                      break
                  }
                }
              }
            })
            this.ws.connectSearchWS(data)
            this.ws.curtainWSConnection?.subscribe((data) => {
              if (data) {
                if (data.status === 'complete' || data.status === 'error') {
                  if (data.id) this.ws.removeOperation(data.id.toString());
                } else if (data.status) {
                  const progress = data.overall_progress || data.percentage || 0;
                  const label = `Curtain: ${data.analysis_group_id}`;
                  if (data.id) this.ws.updateOperationProgress(data.id.toString(), 'curtain', data.status, progress, data.message || data.current_phase, label);
                }
              }
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
                    this.ws.removeOperation(data.id)
                    break
                  case "started":
                  case "in_progress":
                    const progress = data.found_files > 0 ? (data.current_progress / data.found_files) * 100 : 0;
                    this.ws.addSearchOperation(data.id)
                    this.ws.updateOperationProgress(data.id, 'search', data.status, progress, `Processed ${data.current_progress}/${data.found_files}`, 'Search Operation');
                    break
                }
              }
            }
          })
          //this.ws.connectCurtainWS(this.web.searchSessionID)
          this.ws.curtainWSConnection?.subscribe((data) => {
            if (data) {
              if (data.status === 'complete' || data.status === 'error') {
                if (data.id) this.ws.removeOperation(data.id.toString());
              } else if (data.status) {
                const progress = data.overall_progress || data.percentage || 0;
                const label = `Curtain: ${data.analysis_group_id}`;
                if (data.id) this.ws.updateOperationProgress(data.id.toString(), 'curtain', data.status, progress, data.message || data.current_phase, label);
              }
            }
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
