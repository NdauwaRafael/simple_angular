import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalDetails } from '../../../_models/formData.model';
import { FormDataService } from '../../../_services/form-data.service';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  personal: PersonalDetails;
  form: any;
  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.personal = this.formDataService.getPersonal();
  }
  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.formDataService.setPersonal(this.personal);
    return true;
  }

  continue(form: any) {
    if (this.save(form)) {
      this.router.navigate(['/employment']);
    }
  }
}
