import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EmploymentDetails} from '../../../_models/formData.model';
import {FormDataService} from '../../../_services/form-data.service';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {

  employment: EmploymentDetails;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.employment = this.formDataService.getEmploymentDetails();
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.formDataService.setEmploymentDetails(this.employment);
    return true;
  }

  continue(form: any) {
    if (this.save(form)) {
      this.router.navigate(['/bank']);
    }
  }
}
