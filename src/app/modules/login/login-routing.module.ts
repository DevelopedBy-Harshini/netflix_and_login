import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path:'',
component:FormComponent},
{path:'',
component:DisplayComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
