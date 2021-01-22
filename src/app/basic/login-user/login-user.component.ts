import { Component, OnInit } from '@angular/core';
import {Login} from '../shared/model/login';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
@Component({
  selector: 'app-login-user',
  templateUrl:'./login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
  myForm: FormGroup;
  public loginModel : Login;
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
   this.loginModel=new Login;
    console.log("enter login");
    this.reactiveForm();
  }
    /* Reactive form */
    reactiveForm() {
      this.myForm = this.fb.group({
        username: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
        password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]]
      })
    }
    submitForm(login){
   if(this.myForm.valid){
    console.log("valid data",login);
   
   }
    }
    public checkError = (controlName: string, errorName: string) => {
      return this.myForm.controls[controlName].hasError(errorName);
    }

}
