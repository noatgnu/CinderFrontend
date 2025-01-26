import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {AccountsService} from "./accounts/accounts.service";
import {WebService} from "./web.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const accountService = inject(AccountsService)
  const webService = inject(WebService)
  req = req.clone({
    setHeaders: {"X-Cinder-Instance-Id": webService.cinderInstanceID}
  })
  const csrf = webService.getCSRFTokenFromCookies()
  console.log(csrf)
  if (csrf) {
    // check if the csrf token is in the headers
    req = req.clone({
      setHeaders: {"X-CSRFToken": csrf}
    })
  }
  const session = webService.getSessionIDFromCookies()
  if (session) {
    req = req.clone({
      setHeaders: {"X-Session-Token": session}
    })
  }
  if (accountService.loggedIn) {
    req = req.clone({
      withCredentials: true
    })
  }
  if (accountService.userAccount.token) {
    req = req.clone({
      setHeaders: { Authorization: `Token ${accountService.userAccount.token}` }
    });
  }

  return next(req);
};
