import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserModel} from '../model/user.model';
import {Observable} from 'rxjs';
import {ResponseEntity} from '../model/api.response';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/signup';

  login(loginPayload): Observable<ResponseEntity> {
    return this.http.post<ResponseEntity>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }

  getUsers(): Observable<ResponseEntity> {
    return this.http.get<ResponseEntity>(this.baseUrl);
  }

  getUserById(id: number): Observable<ResponseEntity> {
    return this.http.get<ResponseEntity>(this.baseUrl + id);
  }

  createUser(user: UserModel): Observable<ResponseEntity> {
    return this.http.post<ResponseEntity>(this.baseUrl, user);
  }

  updateUser(user: UserModel): Observable<ResponseEntity> {
    return this.http.put<ResponseEntity>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ResponseEntity> {
    return this.http.delete<ResponseEntity>(this.baseUrl + id);
  }
}
