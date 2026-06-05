import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, shareReplay } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface CurtainList {
  id: number;
  name: string;
  data: string;
  default: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CurtainListService {
  private readonly baseUrl = 'https://curtain-backend.omics.quest';
  private categories$: Observable<string[]> | null = null;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    if (!this.categories$) {
      this.categories$ = this.http
        .get<string[]>(`${this.baseUrl}/data_filter_list/get_all_category/`)
        .pipe(
          map(cats => cats.sort()),
          catchError(() => of([])),
          shareReplay(1),
        );
    }
    return this.categories$;
  }

  searchByName(term: string): Observable<CurtainList[]> {
    if (term.length < 2) return of([]);
    return this.http
      .get<{ results: CurtainList[] }>(`${this.baseUrl}/data_filter_list/?name=${encodeURIComponent(term)}`)
      .pipe(
        map(r => (Array.isArray(r.results) ? r.results : [])),
        catchError(() => of([])),
      );
  }

  getByCategory(category: string): Observable<CurtainList[]> {
    if (!category) return of([]);
    return this.http
      .get<{ results: CurtainList[] }>(`${this.baseUrl}/data_filter_list/?category=${encodeURIComponent(category)}`)
      .pipe(
        map(r => (Array.isArray(r.results) ? r.results : [])),
        catchError(() => of([])),
      );
  }

  parseProteins(data: string): string[] {
    return data.split(/[\n,]/).map(s => s.trim()).filter(s => s.length > 0);
  }

  getProteinCount(data: string): number {
    return this.parseProteins(data).length;
  }
}
