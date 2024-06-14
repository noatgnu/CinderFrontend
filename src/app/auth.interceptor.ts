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
  if (accountService.token) {
    req = req.clone({
      setHeaders: { Authorization: `Token ${accountService.token}` }
    });
  }

  return next(req);
};
