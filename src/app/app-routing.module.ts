import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {NoteComponent} from './note/note.component';
import {AddNoteComponent} from './add-note/add-note.component';
import {SignInComponent} from './sign-in/sign-in.component';

const routes: Routes = [
  {path: '', redirectTo: '/userComponent', pathMatch: 'full'},
  {path: 'appComponent', component: AppComponent},
  {path: 'userComponent', component: UserComponent},
  {path: 'createUserComponent', component: CreateUserComponent},
  {path: 'note', component: NoteComponent},
  {path: 'addnote', component: AddNoteComponent},
  {path: 'login', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
