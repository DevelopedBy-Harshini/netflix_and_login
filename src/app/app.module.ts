import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DisplayComponent} from './modules/login/components/display/display.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import{MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  RouterModule,Routes } from '@angular/router';
import{LoginComponent} from './modules/login/login.component';
import {FormComponent} from './modules/login/components/form/form.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HomeComponent} from './modules/netflix/components/home/home.component';
import {NetflixComponent} from './modules/netflix/netflix.component'
import { LogincardComponent } from './modules/netflix/components/logincard/logincard.component';
import { InputComponent } from './modules/netflix/components/input/input.component';
import { MatIcon } from '@angular/material/icon';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MainpageComponent} from './modules/netflix/components/mainpage/mainpage.component';
import { StartComponent } from './start/start.component';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    DisplayComponent,
    HomeComponent,
    LogincardComponent,
    NetflixComponent,
    InputComponent,
    MainpageComponent,
    StartComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule,MatSidenavModule,MatIconModule,MatBadgeModule,SlickCarouselModule,
    MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule,ReactiveFormsModule,RouterModule,MatTableModule,MatPaginatorModule,
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
