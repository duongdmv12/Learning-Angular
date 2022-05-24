import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private router: Router, ) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
     tap(res => {
      if (res) {
        const statusCode = res;
        switch(+statusCode) {
          case 401:
          case 403: {
            this.router.navigate(['/login']);
            break;
          }
          case 404: {

            break;
          }
          // case 500: {
          //   showMessage
          // }
          default: break;
        }
      }
     })
    );
  }
}
