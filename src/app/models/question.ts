import { Observable } from "rxjs";
import { Answer } from "./answer";
import { take, map } from 'rxjs/operators';

export class Question {

  public get id(): number {
    return this._id;
  }

  public get text(): string {
    return this._text;
  }

  public get answersList(): Array<Answer> {
    return this._answersList;
  }

  public get cost(): number {
    return this._cost;
  }

  constructor(
    private _id: number,
    private _text: string,
    private _answersList: Array<Answer>,
    private _cost: number
  ) { }

  // public isAnswered(): boolean {
  //   return !!this.answersList.find(a => a.status == 'answered');
  // }


  public getAnswerIndex(pAnswer: Answer): number {
    return this.answersList.findIndex(answer => answer.text == pAnswer.text);
  }

  public static parseQuestions(questions: Observable<Array<Question>>): Observable<Array<Question>> {
    return questions.pipe(take(1)).pipe(map(questionsList => {
      return questionsList.map(function (question: any): Question {
        return new Question(question.id, question.text,
          question.answersList.map(function (answer: any): Answer {
            return new Answer(answer.id, answer.text) }), question.cost);
      });
    }));
  }

  // public getAnsweredIndex(): number {
  //   return this.answersList.findIndex(a => a.status == 'answered');
  // }

  // public setCorrectAnswerToAnswered(): void {
  //   const ind: number = this.answersList.findIndex(a => a.isCorrect);
  //   this.answersList[ind].status = "answered";
  // }

  // public updateAnswerStatuses(answer: Answer): void {
  //   this.answersList.forEach(function (el, index, arr) {
  //     arr[index].status = el.answer == answer.answer ? answer.status : 'default';
  //   });
  // }

  // public resetAnswers(): void {
  //   this.answersList.forEach(function (el, index, arr) {
  //     arr[index].status = 'default';
  //   });
  // }
}
