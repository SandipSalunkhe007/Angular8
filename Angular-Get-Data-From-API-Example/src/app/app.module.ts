import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetApiDataComponent } from './view/get-api-data/get-api-data.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustHttpIntercept } from './interceptor/cust-http-intercept';

@NgModule({
  declarations: [
    AppComponent,
    GetApiDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:CustHttpIntercept,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
