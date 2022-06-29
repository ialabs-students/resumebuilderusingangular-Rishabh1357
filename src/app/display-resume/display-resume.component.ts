import { Component, OnInit } from '@angular/core';
import { resumeFormData } from '../model/resumeFormData';
@Component({
  selector: 'app-display-resume',
  templateUrl: './display-resume.component.html',
  styleUrls: ['./display-resume.component.scss']
})
export class DisplayResumeComponent implements OnInit {

  formData: resumeFormData;
  constructor() { 
    let data = (localStorage.getItem("formData") ? localStorage.getItem("formData") : "{}") as string;
   console.log(data);
    this.formData = JSON.parse(data);
  }

  ngOnInit(): void {
  }

}
