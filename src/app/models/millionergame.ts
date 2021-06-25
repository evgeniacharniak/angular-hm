import { Question } from "./question";

export class MillionerGame {

  private _score: number = 0;

  public constructor() {
  }

  public updateScore(question: Question): number {
    this._score += question.questionCost;
    return this._score;
    return 0;
  }

  public resetGame(questionList: Array<Question>): void {
    questionList.forEach(function (q, ind, questionslist) {
      // let aInd: number = q.answersList.findIndex(a => a.status == 'answered');
      // questionslist[ind].answersList[aInd].status = 'default';
    });
  }

  public blockAnswers(): void {

  }
}
