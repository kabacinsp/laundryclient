import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8085/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',  'Access-Control-Allow-Origin': AUTH_API,
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'Access-Control-Allow-Credentials': ''})
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(
      AUTH_API + 'signin',
      {
        "username": username,
        "password": password
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.httpClient.post(AUTH_API + 'logout', {}, httpOptions);
  }

  
}
