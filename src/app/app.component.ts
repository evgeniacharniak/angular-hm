import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { QuestionsDataService } from './data-service/questions-data.service';
import { Question } from './models/question';

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent /*implements OnInit*/ {

  // private _questionsList!: Array<Question>;
  // public get questionsList(): Array<Question> {
  //   return this._questionsList;
  // }

  // public get questionsDataService(): QuestionsDataService {
  //   return this._questionsDataService;
  // }

  // public constructor(private _questionsDataService: QuestionsDataService) {
  //   this.questionsDataService.getQuestionsObservable().subscribe(questions => {
  //     this._questionsList = questions;
  //   });
  // }

  // ngOnInit(): void {
  //   console.log('app.component ngOnInit');
  //   this.questionsDataService.getQuestionsObservable().subscribe(questions => {
  //     this._questionsList = questions;
  //   }); // work via subscriber
  // }
}
