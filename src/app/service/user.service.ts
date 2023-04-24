import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class User {
  'username': string;
  'firstname': string;
  'lastname': string;
  'password': string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:3000/api/';

  constructor( private http: HttpClient ) { }

  registerUser(user: any): Observable<any> {
    return this.http.post(this.baseUrl + 'signup', user);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post(this.baseUrl + 'login', user);
  }

}
