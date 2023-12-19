import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { apiHeaders } from '../constants/application-constants';
import { Router } from '@angular/router';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: apiHeaders,
    });
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status !== 200) {
          this.router.navigateByUrl('error');
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
