import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BankDetails} from '../../../_models/formData.model';
import {FormDataService} from '../../../_services/form-data.service';
@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
bank: BankDetails;
  form: any;
  constructor(private router: Router, private formDataService: FormDataService) {
  }


  ngOnInit() {
    this.bank = this.formDataService.getBankDetails();
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.formDataService.setBankDetails(this.bank);
    return true;
  }

  continue(form: any) {
    if (this.save(form)) {
      this.router.navigate(['/particulars']);
    }
  }
}
