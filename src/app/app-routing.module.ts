import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CentralViewComponent} from "./components/central-view/central-view.component";

const routes: Routes = [
    {
    path: '', component: CentralViewComponent,
    children: [
        {path: '', component: HomeComponent}
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
