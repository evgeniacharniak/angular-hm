import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {

  private _isLoading: Subject<boolean> = new Subject<boolean>();
  public get isLoading(): Subject<boolean> {
    return this._isLoading;
  }

  show() {
    this._isLoading.next(true);

    console.log('show');
  }

  hide() {
    this._isLoading.next(false);

    console.log('hide');
  }
}
