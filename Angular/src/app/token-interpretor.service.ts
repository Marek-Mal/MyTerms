import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { SharedserviceService } from './sharedservice.service';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TokenInterpretorService implements HttpInterceptor {

  constructor(public service: SharedserviceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
    request = request.clone({
      setHeaders: {
        Authorization: `${this.service.getToken()}`
      }
    });
    return next.handle(request);
  }

}
