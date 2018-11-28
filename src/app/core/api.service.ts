import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserModel} from '../model/user.model';
import {Observable} from 'rxjs';
import {ResponseEntity} from '../model/api.response';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  login(loginPayload): Observable<ResponseEntity> {
    return this.http.post<ResponseEntity>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }

  getUsers(): Observable<ResponseEntity> {
    return this.http.get<ResponseEntity>('http://localhost:8080/users');
  }

  getUserById(id: number): Observable<ResponseEntity> {
    return this.http.get<ResponseEntity>('http://localhost:8080/' + id);
  }

  createUser(user: UserModel): Observable<ResponseEntity> {
    return this.http.post<ResponseEntity>('http://localhost:8080/signup', user);
  }

  updateUser(user: UserModel): Observable<ResponseEntity> {
    return this.http.put<ResponseEntity>('http://localhost:8080/' + user.id, user);
  }

  deleteUser(id: number): Observable<ResponseEntity> {
    return this.http.delete<ResponseEntity>('http://localhost:8080/' + id);
  }
}
