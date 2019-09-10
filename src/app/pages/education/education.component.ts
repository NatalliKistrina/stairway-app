import { Component, OnInit } from '@angular/core';
import {Education} from "../../model/education";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})
export class EducationComponent implements OnInit {
  education: Education[];
  constructor() {
    this.education = [
      {date: 'In 2018', text: 'Finished the course FrontendPro in Hillel'},
      {
        date: 'In 2006',
        text: 'Graduated from the Odessa National Academy of Telecommunications named after O. S. Popov. Specialty telecommunications engineer specialization "Mobile connection".'
      },
      {
        date: 'In 2006',
        text: 'Graduated from the Odessa National Academy of Telecommunications named after O. S. Popov. Specialty management of organizations.'
      }
    ];
  }

  ngOnInit() {
  }

}
