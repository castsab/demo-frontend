import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PollService } from '../services/poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css'],
  providers: [
    PollService
  ]
})
export class CreatePollComponent implements OnInit {

  myform: FormGroup;
  documentNumber: FormControl;
  email: FormControl;
  comments: FormControl;
  markPc: FormControl;
  formValid = false;

  constructor(public pollService: PollService, public router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() { 
    this.documentNumber = new FormControl('', [
      Validators.required,
      //Validators.pattern("^[1-9]*$")
    ]);
    this.email = new FormControl('', [
      Validators.required
    ]);
    this.comments = new FormControl('', [
      Validators.required
    ]);
    this.markPc = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() { 
    this.myform = new FormGroup({
      documentNumber: this.documentNumber,
      email: this.email,
      comments: this.comments,
      markPc: this.markPc
    });
  }

  savePoll(){
    if(this.myform.valid){
      
      this.pollService.savePoll(this.myform).subscribe(
        resp => {
          console.log('savePoll success');
          alert('Respuesta guardada');
          this.router.navigate(['/polls']);
        },
        error => {
          console.log('savePoll error');
      });

    }else{
      this.formValid = true;
    }
  }

}
