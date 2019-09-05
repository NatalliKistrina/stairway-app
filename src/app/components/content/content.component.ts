import { Component, OnInit } from '@angular/core';
import {Education} from "../../model/education";
import {Work} from "../../model/work";
import {ChartType, ChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {
  education: Education[];
  work: Work[];

  public pieChartOptions: ChartOptions = {
    responsive: false,
    legend: {
      position: 'top',
    }
  };
  public pieChartLabelsWork: Label[] = [[], ['Team Work']];
  public pieChartLabelsCreativity: Label[] = [[], ['Creativity']];
  public pieChartLabelsOrganization: Label[] = [[], ['Organization']];
  public pieChartDataWork: number[] = [100, 900];
  public pieChartDataCreativity: number[] = [300, 700];
  public pieChartDataOrganization: number[] = [50, 950];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  public pieChartColors = [
    {
      backgroundColor: ['rgba(226,233,236,0.3)', 'rgba(0,255,0,0.3)'],
    },
  ];
  public pieChartColorsRed = [
    {
      backgroundColor: ['rgba(226,233,236,0.3)', 'rgba(255,0,0,0.3)'],
    },
  ];
  public pieChartColorsBlue = [
    {
      backgroundColor: ['rgba(226,233,236,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];
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
    this.work = [
      {
        date: 'From June 2018', name: 'Qrok mobi', status: 'Front-end', skills: [
          'experience in work with  JS/jQuery',
          'experience in work with  Angular, Vuejs'
        ]
      },
      {
        date: 'From August 2016 -  To December  2017', name: 'VizualTech', status: 'HTML-coder', skills: [
          'good experience in work with  CSS3&HTML5',
          'good experience in work with  Adobe Photoshop',
          'CSS preprocessors LESS / SASS',
          'experience in work with  JS/jQuery',
          'Twitter Bootstrap CSS framework',
          'Ionic Framework - development of mobile app',
          'Angular 2',
          'JavaScript task runners Gulp, Webpack',
          'Git'
        ]
      },
      {
        date: 'From March 2013 – To February 2016', name: 'AltSoft', status: 'HTML-coder', skills: [
          'good experience in work with  CSS3&HTML5',
          'good experience in work with  Adobe Photoshop, Adobe  Dreamweaver, Microsoft 4Web, Microsoft Design',
          'WordPress',
          'experience in work with  JS/jQuery',
          'Git, Gira, Mantis, SVN'
        ]
      },
    ];
  }

  ngOnInit() {
  }

}
