import {Component, OnInit} from '@angular/core';
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Skills} from "../../model/skills";
import {Lang} from "../../model/lang";

@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.less']
})
export class AsideComponent implements OnInit {
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
