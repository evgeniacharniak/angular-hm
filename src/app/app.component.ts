import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionsDataService } from './data-service/questions-data.service';
import { Question } from './models/question';

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent /*implements OnInit*/ {

  private _questions$: Observable<Array<Question>>;
  public get questions$(): Observable<Array<Question>> {
    return this._questions$;
  }

  public constructor(questionsDataService: QuestionsDataService) {
    this._questions$ = questionsDataService.getQuestionsList();
  }

  // ngOnInit(): void {
  //   console.log('app.component ngOnInit');
  //   this.questionsDataService.getQuestionsObservable().subscribe(questions => {
  //     this._questionsList = questions;
  //   }); // work via subscriber
  // }
}
