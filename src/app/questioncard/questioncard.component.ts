import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

@Component({
  selector: 'mf-questioncard',
  templateUrl: './questioncard.component.html',
  styleUrls: ['./questioncard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestioncardComponent /*implements OnInit*/ {

  @Input()
  public q!: Question;

  @Output()
  public clickEmitter: EventEmitter<Question>;

  public constructor() {
    this.clickEmitter = new EventEmitter();
  }

  public clickHandler(answer: Answer): void {
    console.log("return answer: " + answer.answer);
    this.q.answersList.forEach(function (el, index, arr) {
      arr[index].status = el.answer == answer.answer ? answer.status : 'default';
    });

    const answeredAnswer: number = this.q.answersList.findIndex(el => el.status == 'answered');
    if (this.q.isAnswered() && this.q.getAnsweredIndex() != this.q.getCorrectAnswerIndex()) {
      this.showCorrectAnswerHandler();
      this.clickEmitter.emit(this.q);
    }
  }

  public showCorrectAnswerHandler(): void {
    this.q.setCorrectAnswerToAnswered();
  }

  // public getCurrentAnswer(): number {
  //   return this.q.answersList.findIndex(a => a.status == 'selected');
  // }

  public questionStatus(): string {
    if (!this.q.isAnswered()) {
      const ind = this.q.answersList.findIndex(el => el.status == 'selected')
      return ind + ' ' + this.q.answersList[ind]?.status;
    }
    return 'answered';
  }
}
