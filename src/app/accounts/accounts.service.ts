import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserAccount} from "./user-account";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  token: string = ""
  loggedIn: boolean = false
  baseURL: string = environment.baseURL;
  username: string = ""
  lastVisited: Date = new Date()
  userAccount: UserAccount = {token: "", username: "", darkMode: false, lastVisited: new Date()}
  triggerLoginSubject: Subject<boolean> = new Subject<boolean>()
  is_staff: boolean = false

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    this.loggedIn = false
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'application/json')
    return this.http.post(
      `${this.baseURL}/api/token-auth/`,
      {"username": username, "password": password},
      {responseType: 'json', observe: 'body'}
    );
  }

  logout() {
    this.loggedIn = false
    this.token = ""
    localStorage.removeItem("cinderToken")
    localStorage.removeItem("cinderUsername")
  }



  loadAuthFromStorage() {
    const token = localStorage.getItem("cinderToken")
    const username = localStorage.getItem("cinderUsername")
    const lastVisited = localStorage.getItem("cinderLastVisited")
    if (token && username ) {
      this.userAccount.token = token
      this.userAccount.username = username
      this.loggedIn = true
      localStorage.removeItem("cinderToken")
      localStorage.removeItem("cinderUsername")
      localStorage.setItem("cinderUserAccount", JSON.stringify(this.userAccount))
    }
    if (lastVisited) {
      this.userAccount.lastVisited = new Date(JSON.parse(lastVisited))
    }

    const userAccount = localStorage.getItem("cinderUserAccount")
    if (userAccount ) {
      this.userAccount = JSON.parse(userAccount)
      if (this.userAccount.token !== "" && this.userAccount.username !== "") {
        this.loggedIn = true
      }

    }
    const body = document.getElementsByTagName('body')[0]
    if (this.userAccount.darkMode) {
      body.classList.add('dark-theme')
      body.classList.remove('light-theme')
    } else {
      body.classList.remove('dark-theme')
      body.classList.add('light-theme')
    }
    console.log(this.userAccount)
  }

  saveToStorage() {
    localStorage.setItem("cinderUserAccount", JSON.stringify(this.userAccount))
  }
}
