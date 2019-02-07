import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalComponent} from './loan/application/personal/personal.component';
import {LoanparticlarsComponent} from './loan/application/loanparticlars/loanparticlars.component';
import {EmploymentComponent} from './loan/application/employment/employment.component';
import {BankComponent} from './loan/application/bank/bank.component';
import {ConfirmComponent} from './loan/application/confirm/confirm.component';

const routes: Routes = [
  { path: 'personal',  component: PersonalComponent },
  { path: 'employment',  component: EmploymentComponent },
  { path: 'bank',  component: BankComponent },
  { path: 'particulars',  component: LoanparticlarsComponent },
  { path: 'confirm',  component: ConfirmComponent },
  { path: '',   redirectTo: '/personal', pathMatch: 'full' },
  { path: '**', component: PersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
