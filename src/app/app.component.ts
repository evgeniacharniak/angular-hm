import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionsDataService } from './data-service/questions-data.service';
import { LoaderService } from './loader-service/loader.service';
import { Question } from './models/question';

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent{

  private _questions$: Observable<Array<Question>>;
  public get questions$(): Observable<Array<Question>> {
    return this._questions$;
  }

  public constructor(private _loaderService: LoaderService, questionsDataService: QuestionsDataService) {
    this._questions$ = questionsDataService.getQuestions();
  }
}
