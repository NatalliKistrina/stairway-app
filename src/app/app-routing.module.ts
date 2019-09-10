import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CentralViewComponent} from "./components/central-view/central-view.component";
import {EducationComponent} from "./pages/education/education.component";
import {ExperienceComponent} from "./pages/experience/experience.component";

const routes: Routes = [
    {
    path: '', component: CentralViewComponent,
    children: [
        {path: '', component: HomeComponent},
        {path: 'education', component: EducationComponent},
        {path: 'experience', component: ExperienceComponent}
    ]},
    {path: '', redirectTo: '/', pathMatch: 'full'},];


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes,
        {
            useHash: true,
            scrollPositionRestoration: 'enabled'
        })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
