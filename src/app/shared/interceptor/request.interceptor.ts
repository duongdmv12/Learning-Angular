import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { AppConstant } from '../utilities/app.constant';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {
  constructor(private authservice: AuthService) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // handle request
    const me = this;
    req.headers.append('Content-Type', 'application/json');
    const token = me.authservice.getToken();
    if (!!token) {
      req.headers.append(AppConstant.AUTHORIZATION_KEY, token);
    }
    return next.handle(req);
  }
}
