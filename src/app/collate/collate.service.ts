import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Collate, CollateQuery, CollateTag, CollateTagQuery} from "./collate";

@Injectable({
  providedIn: 'root'
})
export class CollateService {
  baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }

  getCollates(limit: number, offset: number, searchTerm: string|undefined|null, tag_ids: number[]|undefined|null) {
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
    if (tag_ids) {
      params = params.append('tag_ids', tag_ids.join(','))
    }
    const user = localStorage.getItem("cinderUserAccount")
    if (user) {
      const userAccount = JSON.parse(user)
      if (userAccount.currentLabGroup) {
        params = params.append('lab_group', userAccount.currentLabGroup.toString())
      }
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

  getCollateTags(searchTerm: string|undefined|null, limit: number = 10, offset: number = 0) {
    let params: HttpParams = new HttpParams()
    if (searchTerm) {
      params = params.append('search', searchTerm)
    }
    if (limit) {
      params = params.append('limit', limit)
    }
    if (offset) {
      params = params.append('offset', offset)
    }
    return this.http.get<CollateTagQuery>(
      `${this.baseURL}/api/collate_tags/`, {params: params}
    )
  }

  createCollateTag(name: string) {
    return this.http.post<CollateTag>(
      `${this.baseURL}/api/collate_tags/`,
      {name: name}
    )
  }

  updateCollateTag(id: number, name: string) {
    return this.http.put<CollateTagQuery>(
      `${this.baseURL}/api/collate_tags/${id}/`,
      {name: name}
    )
  }

  deleteCollateTag(id: number) {
    return this.http.delete<CollateTagQuery>(
      `${this.baseURL}/api/collate_tags/${id}/`
    )
  }

  addTagToCollate(collateID: number, tagID: number) {
    return this.http.post<CollateTag>(`${this.baseURL}/api/collate_tags/${tagID}/add_to_collate/`, {collate: collateID})
  }

  removeTagFromCollate(collateID: number, tagID: number) {
    return this.http.post(`${this.baseURL}/api/collate_tags/${tagID}/remove_from_collate/`, {collate: collateID})
  }

  getCollateTagByID(id: number) {
    return this.http.get<CollateTag>(`${this.baseURL}/api/collate_tags/${id}/`)
  }


}
