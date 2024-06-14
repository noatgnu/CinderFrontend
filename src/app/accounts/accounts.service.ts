import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  token: string = ""
  loggedIn: boolean = false
  baseURL: string = environment.baseURL;
  username: string = ""
  lastVisited: Date = new Date()
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

  loadLastVisited() {
    const current = new Date()
    const lastVisited = localStorage.getItem("cinderLastVisited")
    if (lastVisited) {
      this.lastVisited = new Date(JSON.parse(lastVisited))
      this.saveDate(current)
    } else{
      this.lastVisited = current
      this.saveDate(current)
    }
  }

  loadAuthFromStorage() {
    const token = localStorage.getItem("cinderToken")
    const username = localStorage.getItem("cinderUsername")
    if (token && username) {
      this.token = token
      this.username = username
      this.loggedIn = true
    }
  }

  saveToStorage() {
    localStorage.setItem("cinderToken", this.token)
    localStorage.setItem("cinderUsername", this.username)
  }

  saveDate(date: Date) {
    localStorage.setItem("cinderLastVisited", JSON.stringify(date))
  }
}
