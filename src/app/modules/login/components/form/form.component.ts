import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder,Validators,FormControl} from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userform!: FormGroup;
  hide = true; 

  constructor(private formBuilder:FormBuilder,private api: ApiService, private router:Router) {}

  ngOnInit(): void {
  this.userform = this.formBuilder.group({
    userName : ['',Validators.required],
    emailId : ['',Validators.required],
    phoneNo : ['',Validators.required],
    passWord : ['',Validators.required]
  })
  
  }
  
  onSubmit(){
    if(this.userform.valid){
      this.api.postform(this.userform.value)
      .subscribe({
        next:(res)=>{
          alert("added successfully");
          this.userform.reset();
          //this.router.navigate(["/display"]);
          //this.api.variable = this.userform.value;
        },
      error:()=>{
        console.log("error in adding form value");
      }
      })
    }
    
}

}
