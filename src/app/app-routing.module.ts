import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisplayComponent} from './modules/login/components/display/display.component';
import {LoginComponent} from './modules/login/login.component';
import{FormComponent} from './modules/login/components/form/form.component'
import {NetflixComponent} from './modules/netflix/netflix.component';
import  {HomeComponent} from './modules/netflix/components/home/home.component';
import {LogincardComponent} from './modules/netflix/components/logincard/logincard.component'
import { MainpageComponent } from './modules/netflix/components/mainpage/mainpage.component'
import {StartComponent} from './start/start.component'


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'netflix', component: NetflixComponent},
  {path:'logincard', component:LogincardComponent},
  {path:'main', component:MainpageComponent},
  {path:'', component:StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
