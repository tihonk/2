import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../core/api.service';
import {ResponseEntity} from '../model/api.response';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  invalidLogin: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });

  }

  onSubmit() {
    this.apiService.getOne(this.addForm.controls.username.value).subscribe( data5 => {
      if (data5 !== null) {
        this.invalidLogin = true;
      } else {
        this.apiService.createUser(this.addForm.value)
          .subscribe( data => {
            this.router.navigate(['login']);
          });
      }
    });
  }

}
