import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { FormDataService } from './_services/form-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './loan/application/application.component';
import { PersonalComponent } from './loan/application/personal/personal.component';
import { BusinessComponent } from './loan/application/business/business.component';
import { LoanparticlarsComponent } from './loan/application/loanparticlars/loanparticlars.component';
import { LoaninotherbanksComponent } from './loan/application/loaninotherbanks/loaninotherbanks.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BankComponent } from './loan/application/bank/bank.component';
import { EmploymentComponent } from './loan/application/employment/employment.component';
import { ConfirmComponent } from './loan/application/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    PersonalComponent,
    BusinessComponent,
    LoanparticlarsComponent,
    LoaninotherbanksComponent,
    NavbarComponent,
    BankComponent,
    EmploymentComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{ provide: FormDataService, useClass: FormDataService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
