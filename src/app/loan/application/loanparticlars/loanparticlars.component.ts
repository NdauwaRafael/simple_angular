import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoanParticlars} from '../../../_models/formData.model';
import {FormDataService} from '../../../_services/form-data.service';

@Component({
  selector: 'app-loanparticlars',
  templateUrl: './loanparticlars.component.html',
  styleUrls: ['./loanparticlars.component.scss']
})
export class LoanparticlarsComponent implements OnInit {
  loan: LoanParticlars;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.loan = this.formDataService.getLoanParticulars();
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.formDataService.setLoanParticulars(this.loan);
    return true;
  }

  continue(form: any) {
    if (this.save(form)) {
      this.router.navigate(['/confirm']);
    }
  }

}
