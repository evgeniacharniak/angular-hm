import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MillionerGame } from '../models/millionergame';
import { Question } from '../models/question';

@Component({
  selector: 'mf-millionergame',
  templateUrl: './millionergame.component.html',
  styleUrls: ['./millionergame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MillionergameComponent {

  private _game: MillionerGame;
  public get game(): MillionerGame {
    return this._game;
  }

  private _qn: number = 0;
  public get qn(): number {
    return this._qn;
  }

  constructor() {
    this._game = new MillionerGame();
  }

  public get questionslist(): Array<Question> {
    return this._game.questions;
  }

  public clickHandler(q: Question): void {
    var ind = this._game.questions.findIndex(el => q.question == el.question);
    this.questionslist[ind] = q;
  }

  public nextQuestionHandler(): void {
    this._game.questions[this.qn].answersList.find(a => a.status == 'answered')
    this._qn++;
  }

  public getScore(): number {
    return this._game.millionerGameGetScore();
  }

  public restart(): void {
    this._qn = 0;
    this._game.resetGame();
  }
}

