import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(
    private http: HttpClient) { }

  public suma(data){
    let formData: FormData = new FormData();
    formData.append('a', data.get('a').value);
    formData.append('b', data.get('b').value);
   
    return this.http.post(environment.restUri + '/test/suma', formData, {
      responseType: 'text'
    });
  }
}
