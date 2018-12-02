import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../core/api.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  invalidLogin: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  addForm2: FormGroup;

  // noinspection JSAnnotator
  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    // noinspection JSAnnotator
      this.addForm2 = this.formBuilder.group({
          id2: [],
          username2: window.localStorage.getItem('userName'),
          number: ['', Validators.required],
          description: ['', Validators.required],
          tag: ['', Validators.required],
          content: ['', Validators.required]
      });
}

  onSubmit() {
      this.apiService.createNotes(this.addForm2.value)
        .subscribe(data => {
          this.router.navigate(['notes']);
        },
          e => {
            this.invalidLogin = true;
          });
  }

}
