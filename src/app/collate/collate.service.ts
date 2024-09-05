import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Collate, CollateQuery} from "./collate";

@Injectable({
  providedIn: 'root'
})
export class CollateService {
  baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }

  getCollates(limit: number, offset: number, searchTerm: string|undefined|null) {
    let params: HttpParams = new HttpParams()
    if (limit) {
      params = params.append('limit', limit)
    }
    if (offset) {
      params = params.append('offset', offset)
    }
    if (searchTerm) {
      params = params.append('search', searchTerm)
    }
    return this.http.get<CollateQuery>(
      `${this.baseURL}/api/collates`,
      {params: params}
    )
  }

  getCollate(id: number) {
    return this.http.get<Collate>(
      `${this.baseURL}/api/collates/${id}`
    )
  }

  createCollate(title: string, greeting: string) {
    return this.http.post<Collate>(
      `${this.baseURL}/api/collates/`,
      {title: title, greeting: greeting}
    )
  }

  updateCollate(id: number, collate: Collate) {
    return this.http.put<CollateQuery>(
      `${this.baseURL}/api/collates/${id}/`,
      collate
    )
  }

  deleteCollate(id: number) {
    return this.http.delete<CollateQuery>(
      `${this.baseURL}/api/collates/${id}/`
    )
  }

}
