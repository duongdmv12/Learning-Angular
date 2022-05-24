import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RequestInterceptor } from './shared/interceptor/request.interceptor';
import { ResponseInterceptor } from './shared/interceptor/response.interceptor';
import {TranslateModule} from '@ngx-translate/core';

const declarations = [
  AppComponent,
  LayoutComponent
];

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: RequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: ResponseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
