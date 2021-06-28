import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  public constructor(private _authService: AuthService) { }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return from(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<unknown>, next: HttpHandler): Promise<HttpEvent<unknown>> {
    const tokenId = await this._authService.getTokenId();
    return next.handle(request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + tokenId
      }
    })).toPromise();
  }
}
