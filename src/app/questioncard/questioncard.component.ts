import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

@Component({
  selector: 'mf-questioncard',
  templateUrl: './questioncard.component.html',
  styleUrls: ['./questioncard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestioncardComponent {

  @Input()
  public q!: Question;

  @Output()
  public clickEmitter: EventEmitter<Question>;

  public constructor() {
    this.clickEmitter = new EventEmitter();
  }

  public clickAnswerHandler(answer: Answer): void {
    console.log('questioncard.component clickAnswerHandler');
    this.q.resetSelectedAnswer(answer);
    if (answer.status == 'answered') {
      this.showCorrectIfAnswerWrong();
      this.clickEmitter.emit(this.q);
    }
  }

  public showCorrectAnswerHandler(): void {
    this.q.setCorrectAnswerToAnswered();
  }

  public getQuestionStatus(): string {
    console.log('questioncard.component getQuestionStatus');
    if (!this.q.isAnswered()) {
      const ind = this.q.answersList.findIndex(el => el.status == 'selected')
      return ind + ' ' + this.q.answersList[ind]?.status;
    }
    return 'answered';
  }

  public showCorrectIfAnswerWrong(): void {
    console.log('questioncard.component showCorrectAnswerHandler');
    const answeredAnswer: number = this.q.answersList.findIndex(el => el.status == 'answered');
    if (this.q.isAnswered() && this.q.getAnsweredIndex() != this.q.getCorrectAnswerIndex()) {
      this.q.setCorrectAnswerToAnswered();
    }
  }

}
