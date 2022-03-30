import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeInComponent } from './components/home-in/home-in.component';
import { HomeComponent } from './components/home/home.component';
import { LogincardComponent } from './components/logincard/logincard.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'loginin',component:LogincardComponent},
 // {path:'home-in', component:HomeInComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetflixRoutingModule { }
