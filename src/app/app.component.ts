import { Component, NgZone } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router ,ROUTES} from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Event } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstproject';
  clicked: boolean | undefined;
  constructor(private router:Router, private route:ActivatedRoute, private zone:NgZone){
    this.router.events.subscribe((event:any)=>{
      if(event instanceof NavigationEnd){
        if(event.url === '/login' || event.url === '/netflix'){
          this.clicked = true;
        }
        else{
          this.clicked = false;
        }
      }
    });
    }
  
gotologin(){
  this.router.navigate(['/login'],{relativeTo: this.route});
}
gotonetflix(){
  this.router.navigate(['/netflix']);
}



}
