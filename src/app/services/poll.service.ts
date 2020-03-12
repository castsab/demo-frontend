import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

  constructor(private http: HttpClient) { }

  public polls() {
    return this.http.get(
        environment.restUri + '/poll/polls',
        { headers: this.headers });
  }

  public savePoll(data){
    let formData: FormData = new FormData();
    formData.append('documentNumber', data.get('documentNumber').value);
    formData.append('email', data.get('email').value);
    formData.append('comments', data.get('comments').value);
    formData.append('markCode', data.get('markPc').value);   
    return this.http.post(environment.restUri + '/poll/savePoll', formData, { headers: this.headers });
  }

  public updatePollByState(id){
    let formData: FormData = new FormData();
    formData.append('pollCode', id);
    return this.http.post(environment.restUri + '/poll/updatePollByState', formData, { headers: this.headers });
  }

}
