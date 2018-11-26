import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserModel} from '../model/user.model';
import {Observable} from 'rxjs';
import {ApiResponse} from '../model/api.response';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/users/';

  login(loginPayload): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }

  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createUser(user: UserModel): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  updateUser(user: UserModel): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
