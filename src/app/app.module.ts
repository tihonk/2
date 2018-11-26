import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { NoteComponent } from './note/note.component';
import { NotesComponent } from './note/notes/notes.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {ApiService} from './core/api.service';
import {TokenInterceptor} from './core/interceptor';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CreateUserComponent,
    NavbarComponent,
    NoteComponent,
    NotesComponent,
    AddNoteComponent,
    SignInComponent,
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
