import {Component, OnInit} from '@angular/core';
import {Lang} from '../../model/lang';
import {Skills} from '../../model/skills';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    faEnvelope = faEnvelope;
    faPhone = faPhone;
    skills: Skills[];
    langs: Lang[];

    constructor() {
        this.skills = [
            {name: 'HTML5', rate: 9},
            {name: 'CSS3 (LESS/SASS)', rate: 9},
            {name: 'Adobe Photoshop', rate: 8},
            {name: 'JS/jQuery', rate: 7},
            {name: 'Angular', rate: 6},
            {name: 'Vue js / Nuxt js', rate: 6},
            {name: 'Ionic Framework', rate: 6},
        ];
        this.langs = [
            {name: 'Українська', rate: 9},
            {name: 'English)', rate: 5},
            {name: 'Русский', rate: 9},
        ];
    }

    ngOnInit() {
    }


}
