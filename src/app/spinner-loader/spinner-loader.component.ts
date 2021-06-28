import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { LoaderService } from '../loader-service/loader.service';

@Component({
  selector: 'mf-spinner-loader',
  templateUrl: './spinner-loader.component.html',
  styleUrls: ['./spinner-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerLoaderComponent {

  private _isLoading: Subject<boolean>;
  public get isLoading(): Subject<boolean> {
    return this._isLoading;
  }

  constructor(loaderService: LoaderService) {
    loaderService.show();
    this._isLoading = loaderService.isLoading;
  }

}
