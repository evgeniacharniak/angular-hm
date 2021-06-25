import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { Answer } from '../models/answer';

@Component({
  selector: 'mf-answercard',
  templateUrl: './answercard.component.html',
  styleUrls: ['./answercard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswercardComponent {

  @Input()
  public answer!: Answer;

  @Input()
  public answerStatus!: string;

  @Output()
  public clickAnswerEmitter: EventEmitter<Answer>;

  public constructor() {
    this.clickAnswerEmitter = new EventEmitter();
  }

  public clickAnswerHandler() {
    this.answerStatus = this.answerStatus == 'default' ? 'selected' : 'answered';
    this.clickAnswerEmitter.emit(this.answer);
  }

  public getClassByAnswerStatus(): string {
    let answerClass = '';
    switch (this.answerStatus) {
      case 'default': answerClass = 'answer_init'; break;
      case 'selected': answerClass = 'answer_select'; break;
      case 'answered': this.answer.isCorrect ? answerClass = 'answer_correct' : answerClass = 'answer_wrong'; break;
    }
    return answerClass;
  }
}
