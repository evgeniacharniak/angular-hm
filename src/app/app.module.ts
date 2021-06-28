import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MillionergameComponent } from './millionergame/millionergame.component';
import { AnswercardComponent } from './answercard/answercard.component';
import { QuestionsDataService } from './data-service/questions-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UrlInterceptor } from './url-interceptor/url.interceptor';
import { SpinnerLoaderComponent } from './spinner-loader/spinner-loader.component';
import { LoaderService } from './loader-service/loader.service';
import { LoaderInterceptor } from './loader-interceptor/loader.interceptor';
import { AuthService } from './auth-service/auth.service';
import { TokenInterceptor } from './token-interceptor/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MillionergameComponent,
    AnswercardComponent,
    SpinnerLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    QuestionsDataService,
    LoaderService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
