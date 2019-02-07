import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './loan/application/application.component';
import { PersonalComponent } from './loan/application/personal/personal.component';
import { BusinessComponent } from './loan/application/business/business.component';
import { LoanparticlarsComponent } from './loan/application/loanparticlars/loanparticlars.component';
import { LoaninotherbanksComponent } from './loan/application/loaninotherbanks/loaninotherbanks.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    PersonalComponent,
    BusinessComponent,
    LoanparticlarsComponent,
    LoaninotherbanksComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
