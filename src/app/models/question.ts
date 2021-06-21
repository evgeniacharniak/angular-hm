import { Answer } from "./answer";

export class Question {

  public get question(): string {
    return this._question;
  }

  public get answersList(): Array<Answer> {
    return this._answersList;
  }

  public get questionCost(): number {
    return this._questionCost;
  }

  constructor(
    private _question: string,
    private _answersList: Array<Answer>,
    private _questionCost: number
  ) { }

  public isAnswered(): boolean {
    return !!this.answersList.find(a => a.status == 'answered');
  }

  public isCorrectAnswered(): boolean {
    return !!this.answersList.find(a => a.status == 'answered')?.isCorrect;
  }

  public getCorrectAnswerIndex(): number {
    return this.answersList.findIndex(a => a.isCorrect);
  }

  public getAnsweredIndex(): number {
    return this.answersList.findIndex(a => a.status == 'answered');
  }

  public setCorrectAnswerToAnswered(): void {
    const ind: number = this.answersList.findIndex(a => a.isCorrect);
    this.answersList[ind].status = "correct";
  }

  public resetSelectedAnswer(answer: Answer): void {
    this.answersList.forEach(function (el, index, arr) {
      arr[index].status = el.answer == answer.answer ? answer.status : 'default';
    });
  }

  public resetAnswers(): void {
    this.answersList.forEach(function (el, index, arr) {
      arr[index].status = 'default';
    });
  }
}
