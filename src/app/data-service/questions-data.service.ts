import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from '../models/answer';
import { Question } from '../models/question';

@Injectable()
export class QuestionsDataService {

  public getQuestionsObservable(): Observable<Array<Question>> {
    const questions$: Observable<Array<Question>> = new Observable(subscriber => {
      subscriber.next(new Array(
        new Question('question1',
          new Array(new Answer('answer1_1', false),
            new Answer('answer1_2', false),
            new Answer('answer1_3', true),
            new Answer('answer1_4', false)
          ),
          5
        ),
        new Question('question2',
          new Array(new Answer('answer2_1', false),
            new Answer('answer2_2', true),
            new Answer('answer2_3', false),
            new Answer('answer2_4', false)
          ),
          10
        ),
        new Question('question3',
          new Array(new Answer('answer3_1', false),
            new Answer('answer3_2', false),
            new Answer('answer3_3', false),
            new Answer('answer3_4', true)
          ),
          20
        )));

      subscriber.complete();
    });
    return questions$;
  }
}
