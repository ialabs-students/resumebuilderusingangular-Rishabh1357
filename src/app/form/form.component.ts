import { Component, OnInit } from '@angular/core';
import {resumeFormData} from '../model/resumeFormData';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
 formData: resumeFormData;
  isResumeVisible: boolean=false;
  
  
  constructor() {
    this.formData = {
      firstName: "",
      middleName: "",
      lastName: ""
    }
   }
  
  ngOnInit(): void {
  }

  submitResumeForm() {
    console.log(this.formData);

    localStorage.setItem("formData", JSON.stringify(this.formData));
    this.isResumeVisible = true;
  }
}
