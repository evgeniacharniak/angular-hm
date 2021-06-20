import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { Answer } from '../models/answer';

@Component({
  selector: 'mf-answercard',
  templateUrl: './answercard.component.html',
  styleUrls: ['./answercard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswercardComponent implements OnChanges {

  @Input()
  public answer!: Answer;

  @Input()
  public questionStatus!: string;

  @Output()
  public clickEmitter: EventEmitter<Answer>;

  public constructor() {
    this.clickEmitter = new EventEmitter();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes')
  }

  public checkAnswerHandler() {
    this.answer.status = this.answer.status == 'default' ? 'selected' : 'answered';
    this.clickEmitter.emit(this.answer);
  }
}
