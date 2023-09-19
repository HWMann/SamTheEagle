import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {ColorsComponent} from "./components/colors/colors.component";
import {AssignsComponent} from "./components/assigns/assigns.component";
import {CalibrateComponent} from "./components/calibrate/calibrate.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'assigns', component: AssignsComponent },
  { path: 'calibrate', component: CalibrateComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
