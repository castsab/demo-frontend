import { Component } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OperationService } from './services/operation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    OperationService
  ]
})
export class AppComponent {
  title = 'demo-frontend';

  myform: FormGroup;
  a: FormControl;
  b: FormControl;
  formValid = false;
  result: string;

  constructor(
    private operationService: OperationService) { }
 
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() { 
    this.a = new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]);
    this.b = new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]);
  }

  createForm() { 
    this.myform = new FormGroup({
      a: this.a,
      b: this.b
    });
  }

  sumar() {
    if(this.myform.valid){
     
      this.operationService.suma(this.myform).subscribe(
        resp => {
          console.log('AppComponent - sumar success');
          this.result = resp;
        },
        error => {
          console.log('AppComponent - suma error');
      });

    }else{
      this.formValid = true;
    }
  }

}
