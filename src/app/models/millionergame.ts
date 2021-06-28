import { Question } from "./question";

export class MillionerGame {

  private _score: number = 0;
  public get score(): number {
    return this._score;
  }

  public updateScore(question: Question): number {
    this._score += question.cost;
    return this._score;
  }

  public resetScore(): void {
    this._score = 0;
  }
}
