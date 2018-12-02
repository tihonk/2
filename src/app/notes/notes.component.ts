import { Component, OnInit } from '@angular/core';
import {ResponseEntity} from '../model/api.response';
import {Router} from '@angular/router';
import {ApiService} from '../core/api.service';
import {UserModel} from '../model/user.model';
import {NotesModel} from '../model/notes.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {

  notes: ResponseEntity;
  us: ResponseEntity;
  a: number;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUserById(Number(window.localStorage.getItem('usersData'))).subscribe( data3 => {
      this.us = data3;
      window.localStorage.setItem('userName', data3.username);
    });
    this.apiService.getNotes()
      .subscribe( data => {
        this.notes = data;
      });
  }
  deleteNotes(notes: NotesModel): void {
    this.apiService.deleteNotes(notes.id2)
      .subscribe( data => {
      });
  }
  addNotes(): void {
    this.router.navigate(['add-notes']);
  }
}

