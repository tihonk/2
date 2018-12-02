import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../core/api.service';
import {ResponseEntity} from '../model/api.response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  user: ResponseEntity;
  userName: ResponseEntity;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };
    this.apiService.login(loginPayload).subscribe(
      data => {
        window.localStorage.setItem('token', data.token);
        this.apiService.getOne(this.loginForm.controls.username.value).subscribe( data2 => {
          window.localStorage.setItem('usersData', String(data2.id));
          console.log(this.userName);
          this.router.navigate(['notes']);
        });
    },
    e => {
        this.invalidLogin = true;
      }
    );
  }

  ngOnInit() {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('userName');
      window.localStorage.removeItem('usersData');
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.compose([Validators.required])],
        password: ['', Validators.required]
      });
  }
}
