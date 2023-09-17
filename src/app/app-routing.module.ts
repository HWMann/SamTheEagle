import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ColorMixerComponent} from "./components/color-mixer/color-mixer.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'color-mixer', component: ColorMixerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
