import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NotesModel} from '../model/notes.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private http: HttpClient) {
  }
  public getNotes(): Observable<NotesModel[]> {
    return this.http.get<NotesModel[]>('http://localhost:8080/getNotes');
  }
  public deleteNotes(user: NotesModel):  void {
    this.http.post('http://localhost:8080/deleteNotes', JSON.stringify(user)).subscribe();
  }
}
