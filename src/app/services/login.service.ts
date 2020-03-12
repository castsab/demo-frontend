import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public signin(data){
    let formData: FormData = new FormData();
    formData.append('username', data.get('email').value);
    formData.append('password', data.get('password').value);
    return this.http.post(environment.restUri + '/users/signin', formData, {
      responseType: 'text'
    });
  }
}
