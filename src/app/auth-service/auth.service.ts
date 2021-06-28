import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public getTokenId(): Promise<string> {
    return Promise.resolve('token-id');

  }
}
