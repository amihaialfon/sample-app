import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MoviesComponent } from '../app/components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
