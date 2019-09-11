import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ChartsModule} from 'ng2-charts';
import {HomeComponent} from './pages/home/home.component';
import {CentralViewComponent} from './components/central-view/central-view.component';
import {HeaderComponent} from './components/header/header.component';
import {ExperienceComponent} from './pages/experience/experience.component';
import {EducationComponent} from './pages/education/education.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CentralViewComponent,
        HeaderComponent,
        ExperienceComponent,
        EducationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FontAwesomeModule,
        ChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
