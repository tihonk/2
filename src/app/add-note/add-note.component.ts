import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {OK} from '../model/httpstatus';
import {AddNoteService} from './add-note.service';
import {UserModel} from '../model/user.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
  providers: [AddNoteService]
})
export class AddNoteComponent implements OnInit {

  private notes: UserModel;
  private isValid: boolean = true;
  private message: string = '';
  constructor(private addNoteService: AddNoteService, private router: Router) {
    if (sessionStorage.getItem('notes')) {
      this.notes = JSON.parse(sessionStorage.getItem('notes'));
    } else {
      this.notes = new UserModel();
    }
  }

  ngOnInit() {
  }
  public saveNotes(): void {
    this.isValid = this.addNoteService.validate(this.notes);
    if (this.isValid) {
      this.addNoteService.saveNotes(this.notes).subscribe( res => {
        if (res.responseCode == OK) {
          this.router.navigate(['/note']);
        } else {
          this.message = res.message;
          this.isValid = false;
        }
      });
    } else {
      this.message = 'Fields with * are required';
    }
    sessionStorage.clear();
  }
}

