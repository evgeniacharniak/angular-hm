import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Answer } from '../models/answer';
import { Question } from '../models/question';

@Injectable()
export class QuestionsDataService {

  public constructor(private _httpClient: HttpClient) { }

  public getQuestions(): Observable<Array<Question>> {
    console.log('getQuestions');
    return Question.parseQuestions(this._httpClient.get<Array<Question>>(`questions`));
  }

  public validateAnswer(questionId: number, answerId: number): Observable<boolean> {
    console.log('validateAnswer');
    return this._httpClient.get<Array<any>>(`questions`).pipe(map(questionsList => {
        return questionsList.find(question => question.id == questionId)?.
          answersList.find((answer: { id: number; isCorrect: boolean;}) => answer.id == answerId)?.isCorrect == 'true' ? true : false;
      }))
    ;
  }

  public getCorrectAnswerId(questionId: number): Observable<number> {
    console.log('getCorrectAnswerId');
    return this._httpClient.get<Array<any>>(`questions`).pipe(map(questionsList => {
        return questionsList.find(question => question.id == questionId)?.
          answersList.find((answer: { id: number; isCorrect: any; }) => answer.isCorrect == 'true')?.id!;
      }))
    ;
  }
}
