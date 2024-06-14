import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {MatButton} from "@angular/material/button";
import {AccountsService} from "./accounts/accounts.service";
import {WebsocketService} from "./websocket.service";
import {WebService} from "./web.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CinderNG';

  ready: boolean = false;

  constructor(private web: WebService, private accounts: AccountsService, private ws: WebsocketService) {
    this.accounts.loadLastVisited()
    this.accounts.loadAuthFromStorage()
    this.web.searchSessionID = localStorage.getItem("cinderSearchSessionID")
    console.log(this.web.searchSessionID)
    if (!this.web.searchSessionID) {
      this.web.getSearchSessionID().subscribe((data) => {
        this.ws.connectSearchWS(data)
        localStorage.setItem("cinderSearchSessionID", data)
        this.web.searchSessionID = data
        this.ws.searchWSConnection?.subscribe((data) => {
          if (data) {
            console.log(data)
          }
        })
      })
    } else {
      this.ws.connectSearchWS(this.web.searchSessionID)
      this.ws.searchWSConnection?.subscribe((data) => {
        if (data) {
          console.log(data)
        }
      })
    }


    this.ready = true
  }
}
