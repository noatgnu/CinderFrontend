import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.buildBreadcrumbs();
    });

    this.buildBreadcrumbs();
  }

  private buildBreadcrumbs() {
    const root = this.router.routerState.snapshot.root;
    const breadcrumbs: Breadcrumb[] = [];
    this.addBreadcrumb(root, [], breadcrumbs);
    this._breadcrumbs$.next(breadcrumbs);
  }

  private addBreadcrumb(route: ActivatedRouteSnapshot, parentUrl: string[], breadcrumbs: Breadcrumb[]) {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map(url => url.path));
      
      if (route.url.length > 0) {
        const path = route.url[0].path;
        let label = path.charAt(0).toUpperCase() + path.slice(1);
        
        // Handle specific route naming
        if (path === 'analysis-group') label = 'Analysis Group';
        if (path === 'search-session') label = 'Search Session';
        
        const url = '/' + routeUrl.join('/');
        breadcrumbs.push({ label, url });
      }
      
      if (route.firstChild) {
        this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
      }
    }
  }
}
