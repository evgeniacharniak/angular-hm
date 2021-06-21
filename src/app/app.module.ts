import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MillionergameComponent } from './millionergame/millionergame.component';
import { QuestioncardComponent } from './questioncard/questioncard.component';
import { AnswercardComponent } from './answercard/answercard.component';
import { QuestionsDataService } from './data-service/questions-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MillionergameComponent,
    QuestioncardComponent,
    AnswercardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    QuestionsDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
