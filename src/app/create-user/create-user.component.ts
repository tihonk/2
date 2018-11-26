import { Component, OnInit } from '@angular/core';
import {UserModel} from '../model/user.model';
import {CreateUserService} from './create-user.service';
import {OK} from '../model/httpstatus';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [CreateUserService]
})
export class CreateUserComponent implements OnInit {
  private user: UserModel;
  private isValid: boolean = true;
  private message: string = '';
  constructor(private createUserService: CreateUserService, private router: Router) {
    if (sessionStorage.getItem('user')) {
          this.user = JSON.parse(sessionStorage.getItem('user'));
    } else {
      this.user = new UserModel();
    }
  }

  ngOnInit() {
  }
  public saveOrUpdate(): void {
     this.isValid = this.createUserService.validate(this.user);
     if (this.isValid) {
       this.createUserService.saveOrUpdate(this.user).subscribe( res => {
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
