import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private token: string = localStorage.getItem('token') || '';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.token = localStorage.getItem('token') || '';

    if(this.token === '') return next.handle(request)

    request = request.clone({
      setHeaders:{
        Authorization: `Bearer ${this.token}`,
      }
    });

    return next.handle(request);
  }
}
