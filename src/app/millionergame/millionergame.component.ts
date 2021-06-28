import { CompileShallowModuleMetadata } from '@angular/compiler';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { delay, take } from 'rxjs/operators';
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
  public questionsList!: Array<Question> | null;

  private _statuses!: Array<'default' | 'selected' | 'wrong' | 'correct'>;
  public get statuses(): Array<'default' | 'selected' | 'wrong' | 'correct'> {
    return this._statuses;
  }

  private _game: MillionerGame;
  public get game(): MillionerGame {
    return this._game;
  }

  private _questionIndex!: number;
  public get questionIndex(): number {
    return this._questionIndex;
  }

  public get questionsDataService(): QuestionsDataService {
    return this._questionsDataService;
  }

  public constructor(private _questionsDataService: QuestionsDataService, private _changeDetectorRef: ChangeDetectorRef) {
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
    this._game.resetScore();
  }

  public isGameFinished(): boolean {
    console.log('millionergame.component isGameFinished');
    return this._questionIndex == this.questionsList!.length - 1 &&
      !!this._statuses.find(status => status == 'correct');
  }

  public isCurrentQuestionAnswered(): boolean {
    return !!this._statuses.find(status => status == 'correct');
  }

  public clickAnswerHandler(answer: Answer): void {
    console.log('millionergame.component clickAnswerHandler');
    if (this._statuses[answer.id - 1] == 'default') {
      this.updateAnswerStatuses(answer.id);
    } else {
      this.checkAnswer(answer);
    }
  }

  public checkAnswer(answer: Answer): void {
    this._questionsDataService.validateAnswer(this._questionIndex + 1, answer.id).
      pipe(take(1)).subscribe(value => {
        console.log(value);
        if (value) {
          this.updateScoreHandler();
          this._statuses[answer.id - 1] = 'correct';
          this._changeDetectorRef.markForCheck();
        } else {
          this._statuses[answer.id - 1] = 'wrong';
          this.showCorrectAnswerHandler();
        }
      });
  }

  public updateScoreHandler(): void {
    this.game.updateScore(this.questionsList![this._questionIndex]);
  }


  public get gameScoreHandler(): number {
    return this.game.score;
  }

  public updateAnswerStatuses(answerId: number): void {
    console.log('millionergame.component updateAnswerStatuses');
    this._statuses.forEach(function (status, index, arr) {
      arr[index] = index + 1 == answerId ? 'selected' : 'default';
    });
  }

  public showCorrectAnswerHandler(): void {
    console.log('questioncard.component showCorrectAnswerHandler');
    this._questionsDataService.getCorrectAnswerId(this._questionIndex + 1).pipe(take(1)).subscribe(
      correctAnswerId => {
        console.log(correctAnswerId); this._statuses[correctAnswerId - 1] = 'correct';
        this._changeDetectorRef.markForCheck();
      }
    );
  }
}

