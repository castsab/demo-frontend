import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css'],
  providers: [
    PollService
  ]
})
export class PollsComponent implements OnInit {

  pollsArray: any = [];

  constructor(public pollService: PollService, public router: Router) { }

  ngOnInit() {
    this.polls();
  }

  public polls(){
    this.pollService.polls().subscribe(
      resp => {
        console.log('polls success');
        this.pollsArray = resp;
      },
      error => {
        console.log('polls error');
    });

  }

  public updatePollByState(id){
    this.pollService.updatePollByState(id).subscribe(
      resp => {
        console.log('updatePollByState success');
        alert('Respuesta descartada');
        this.polls();
      },
      error => {
        console.log('updatePollByState error');
    });
  }

}
