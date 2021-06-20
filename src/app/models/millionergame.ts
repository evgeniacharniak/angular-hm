import { questionCostsList, questionsDb } from "./constants/questionslist";
import { Question } from "./question";

export class MillionerGame {

  private _questions: Array<Question>;
  public get questions(): Array<Question> {
    return this._questions;
  }

  public constructor() {
    this._questions = [...questionsDb];
  }

  public millionerGameGetScore(): number {
    let score: number = 0;
    questionsDb.forEach(function (q, ind, questionsDb) {
      score += q.isCorrectAnswered() ? questionCostsList[ind] : 0;
    });
    return score;
  }

  public resetGame(): void {
    questionsDb.forEach(function (q, ind, questionslist) {
      let aInd: number = q.answersList.findIndex(a => a.status == 'answered');
      questionslist[ind].answersList[aInd].status = 'default';
    });
    // this._questions =  questionsDb.map(el => Object.assign({}, el)); // что с этой штукой не так?
  }
}
