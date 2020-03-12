import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    LoginService
  ]
})
export class LoginComponent implements OnInit {

  myform: FormGroup;
  email: FormControl;
  password: FormControl;
  formValid = false;
  data: any = [];
  isUserExists = true;

  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() { 
    this.email = new FormControl('', [
      Validators.required,
      //Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]);
  }

  createForm() { 
    this.myform = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  login() {
    if(this.myform.valid){
     
      this.loginService.signin(this.myform).subscribe(
        resp => {
          console.log('login success');
          localStorage.setItem('token', resp);
          this.router.navigate(['/polls']);
          this.isUserExists = true;
        },
        error => {
          console.log('login error');
          this.isUserExists = false;
      });

    }else{
      this.formValid = true;
    }
  }

}
