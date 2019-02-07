import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './loan/application/application.component';
import { PersonalComponent } from './loan/application/personal/personal.component';
import { BusinessComponent } from './loan/application/business/business.component';
import { LoanparticlarsComponent } from './loan/application/loanparticlars/loanparticlars.component';
import { LoaninotherbanksComponent } from './loan/application/loaninotherbanks/loaninotherbanks.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    PersonalComponent,
    BusinessComponent,
    LoanparticlarsComponent,
    LoaninotherbanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
