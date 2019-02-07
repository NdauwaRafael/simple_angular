import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormData} from '../../../_models/formData.model';
import {FormDataService} from '../../../_services/form-data.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  formData: FormData;
  formValid: boolean;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    this.formValid = this.formDataService.isFormValid();
  }

  submit() {
// code to call api request goes here
    alert('You have successfully completed the loan request');
    this.formDataService.resetFormData();
  }
}
