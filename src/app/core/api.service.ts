import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserModel} from '../model/user.model';
import {Observable} from 'rxjs';
import {ResponseEntity} from '../model/api.response';
import {NotesModel} from '../model/notes.model';

@Injectable()
export class ApiService {

  private name: String;

  constructor(private http: HttpClient) { }

  getMyName(loginPayload): String {
    return this.name;
  }

  login(loginPayload): Observable<ResponseEntity> {
    return this.http.post<ResponseEntity>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }

  getUsers(): Observable<ResponseEntity> {
    return this.http.get<ResponseEntity>('http://localhost:8080/users');
  }

  getUserById(id: number): Observable<ResponseEntity> {
    return this.http.get<ResponseEntity>('http://localhost:8080/users/' + id);
  }
  getOne(username: String): Observable<ResponseEntity> {
    return this.http.get<ResponseEntity>('http://localhost:8080/' + username);
  }

  createUser(user: UserModel): Observable<ResponseEntity> {
    return this.http.post<ResponseEntity>('http://localhost:8080/signup', user);
  }

  updateUser(user: UserModel): Observable<ResponseEntity> {
    return this.http.put<ResponseEntity>('http://localhost:8080/' + user.id, user);
  }

  deleteUser(id: number): Observable<ResponseEntity> {
    return this.http.delete<ResponseEntity>('http://localhost:8080/users/' + id);
  }
  createNotes(notes: NotesModel): Observable<ResponseEntity> {
    return this.http.post<ResponseEntity>('http://localhost:8080/addNotes', notes);
  }

  getNotes(): Observable<ResponseEntity> {
    return this.http.get<ResponseEntity>('http://localhost:8080/notes');
  }

  deleteNotes(id2: number): Observable<ResponseEntity> {
    return this.http.delete<ResponseEntity>('http://localhost:8080/notes/' + id2);
  }
  getNotesById(id2: number): Observable<ResponseEntity> {
    return this.http.get<ResponseEntity>('http://localhost:8080/notes/' + id2);
  }
}
