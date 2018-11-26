import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RestResponse} from '../model/restResponse.model';
import {UserModel} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AddNoteService {

  constructor(private http: HttpClient) { }
  public validate(notes: UserModel): boolean {
    let isValid = true;
    if (!notes.tag) {
      isValid = false;
    }
    if (!notes.content) {
      isValid = false;
    }
    return isValid;
  }
  public saveNotes(notes: UserModel):  Observable<RestResponse> {
    return this.http.post<RestResponse>('http://localhost:8080/saveNotes', JSON.stringify(notes));
  }
}
