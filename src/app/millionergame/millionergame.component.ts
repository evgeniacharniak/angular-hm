import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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

  @Input()
  public questionsList!: Array<Question>;

  private _statuses!: Array<'default' | 'selected' | 'answered'>;
  public get statuses(): Array<'default' | 'selected' | 'answered'> {
    return this._statuses;
  }

  private _game: MillionerGame;
  public get game(): MillionerGame {
    return this._game;
  }

  private _gameScore: number = 0;
  public get gameScore(): number {
    return this._gameScore;
  }

  private _questionIndex!: number;
  public get questionIndex(): number {
    return this._questionIndex;
  }

  private _lastQuestion!: Question;


  public get questionsDataService(): QuestionsDataService {
    return this._questionsDataService;
  }

  public constructor(private _questionsDataService: QuestionsDataService) {
    this._game = new MillionerGame();
  }

  ngOnInit(): void {
    this._statuses = Array(4).fill('default');
    this._questionIndex = 0;
  }

  public nextQuestionHandler(): void {
    this._questionIndex++;
    this._statuses.fill('default');
  }

  public restart(): void {
    this._questionIndex = 0;
    this._statuses.fill('default');
  }

  public isGameFinished(): boolean {
    console.log('millionergame.component isGameFinished');
    return this._questionIndex == this.questionsList.length - 1 &&
      this._statuses[this.questionsList[this._questionIndex].getCorrectAnswerIndex()] == 'answered'
    return false;
  }

  public isCurrentQuestionAnswered(): boolean {
    return !!this._statuses.find(status => status == 'answered');
  }

  public clickAnswerHandler(answer: Answer): void {
    console.log('millionergame.component clickAnswerHandler');
    const answerIndex = this.questionsList[this._questionIndex].getAnswerIndex(answer);
    this.updateAnswerStatuses(answerIndex);
    if (this._statuses[answerIndex] == 'answered') {
      if (answer.isCorrect) {
        this._gameScore = this.game.updateScore(this.questionsList[this._questionIndex]);
      } else {
          this.setCorrectAnswerHandler();
      }
    }
  }

  public updateAnswerStatuses(answerIndex: number): void {
    console.log('millionergame.component updateAnswerStatuses');
    this._statuses.forEach(function (status, index, arr) {
      arr[index] = index == answerIndex ? (status=='default' ? 'selected' : 'answered') : 'default';
    });
  }

  public setCorrectAnswerHandler(): void {
    console.log('questioncard.component showCorrectAnswerHandler');
    this._statuses[this.questionsList[this._questionIndex].getCorrectAnswerIndex()] = 'answered';
  }
}

