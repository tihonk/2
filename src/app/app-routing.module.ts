import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {AddUserComponent} from './add-user/add-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {ListUserComponent} from './list-user/list-user.component';
import {LoginComponent} from './login/login.component';
import {AddNoteComponent} from './add-note/add-note.component';
import {NotesComponent} from './notes/notes.component';
import {NotesIdComponent} from './notes/notes-id/notes-id.component';

const routes: Routes = [
  {path: '', redirectTo: 'add-user', pathMatch: 'full'},
  { path: 'add-note', component: AddNoteComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  {path: 'appComponent', component: AppComponent},
  { path: 'login', component: LoginComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'notes/:{{notes.id2}}', component: NotesIdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
