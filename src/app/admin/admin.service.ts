import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }

  generateUserToken(username: string) {
    return this.http.post<{'token': string}>(`${this.baseURL}/api/users/generate_token/`, {'username': username}, {responseType: 'json', observe: 'body'})
  }


}
