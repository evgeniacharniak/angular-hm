import { Question } from "./question";

export class MillionerGame {

  private _score: number = 0;

  public constructor() {
  }

  public updateScore(q: Question): number {
    this._score += q.isCorrectAnswered() ? q.questionCost : 0;
    return this._score;
  }

  public resetGame(questionList: Array<Question>): void {
    questionList.forEach(function (q, ind, questionslist) {
      let aInd: number = q.answersList.findIndex(a => a.status == 'answered' || a.status == 'correct');
      questionslist[ind].answersList[aInd].status = 'default';
    });
  }
}
