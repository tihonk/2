import { Component, OnInit } from '@angular/core';
import {NotesService} from './notes.service';
import {NotesModel} from '../../model/notes.model';
import {UserModel} from '../../model/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NotesService]
})
export class NotesComponent implements OnInit {
  private notes: Array<NotesModel>;
  constructor(private notesService: NotesService, private router: Router) { }

  ngOnInit() {
    this.loadNotes();
  }
  private loadNotes(): void {
    this.notesService.getNotes().subscribe(res => {
      this.notes = res;
    });
  }
  public editNote(notes: UserModel): void {
    sessionStorage.setItem('notes', JSON.stringify(notes));
  }
  public deleteNotes(notes: UserModel): void {
    this.notesService.deleteNotes(notes);
  }
}
