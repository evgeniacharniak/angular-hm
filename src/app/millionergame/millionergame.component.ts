import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { QuestionsDataService } from '../data-service/questions-data.service';
import { Answer } from '../models/answer';
import { MillionerGame } from '../models/millionergame';
import { Question } from '../models/question';

@Component({
  selector: 'mf-millionergame',
  templateUrl: './millionergame.component.html',
  styleUrls: ['./millionergame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MillionergameComponent implements OnInit {

  // @Input()
  // public questions!: Array<Question>; // when questions come from app component

  private _game: MillionerGame;
  public get game(): MillionerGame {
    return this._game;
  }

  private _questions$: Observable<Array<Question>>;
  public get questions$(): Observable<Array<Question>> {
    return this._questions$;
  }

  private _score: number = 0;
  public get score(): number {
    return this._score;
  }

  private _qn!: number;
  public get qn(): number {
    return this._qn;
  }

  private _gamestatus: 'default' | 'next' | 'finished' = 'default';
  public get gamestatus(): string {
    return this._gamestatus;
  }

  private _lastQuestion!: Question;


  public get questionsDataService(): QuestionsDataService {
    return this._questionsDataService;
  }

  public constructor(private _questionsDataService: QuestionsDataService) {
    this._questions$ = this.questionsDataService.getQuestionsObservable();
    this._game = new MillionerGame();
  }

  ngOnInit(): void {
    this._qn = 0;
  }

  public nextQuestionHandler(): void {
    this._gamestatus = 'default';
    this._qn++;
  }

  public restart(): void {
    this._qn = 0;
    this._gamestatus = 'default';
  }

  public answerQuestionHandler(q: Question): void {
    console.log('millionergame.component answerQuestionHandler');
    this._score = this.game.updateScore(q);
    if(this.qn != 2) {
      this._gamestatus = 'next';
    } else {
      this._gamestatus = 'finished';
    }
  }
}

