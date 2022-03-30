import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
   
  public signUpForm!: FormGroup;
  public email:any;
  
  constructor(private formbuilder:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
  }
  signUp(){
    
    this.router.navigate(['/netflix/signup']);
  }
  creatForm(){
    this.signUpForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  submit(): void {
    if(this.signUpForm.valid){
      this.signUp();
    } 
  }}


