import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import {ApiService} from './core/api.service';
import {TokenInterceptor} from './core/interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import {AddNoteComponent} from './add-note/add-note.component';
import { NotesComponent } from './notes/notes.component';
import { NotesIdComponent } from './notes/notes-id/notes-id.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    LoginComponent,
    AddNoteComponent,
    NotesComponent,
    NotesIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
