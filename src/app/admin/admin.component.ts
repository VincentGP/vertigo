import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';
import { FormArray } from '@angular/forms/src/model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {

  public title: string;
  public director: string;
  public runtime: number;

  public movies: Movie[];
  public movie: Movie;

  // showSpinner: boolean = false;

  constructor(private router: Router, private data: DataService) {
    this.movie = new Movie();
    this.movies = this.data.movies;
  }

  addMovie(form: FormArray) {
    // If the form is valid
    if (form.status == "VALID") {
      // Create id based on title
      let id = this.title.replace(/\s+/g, '-').toLowerCase();
      // Set the values
      this.movie.id = id;
      this.movie.title = this.title;
      this.movie.director = this.director;
      this.movie.runtime = this.runtime;
      // Push to our data service
      this.data.movies.push(this.movie);
    } else {
      alert('The form isn\'t valid');
    }
  }

  deleteMovie(movie) {
    if (window.confirm("Are you sure?")) {
      let index = this.movies.findIndex(model => model.id === movie.id);
      this.movies.splice(index, 1);
    }
  }

  editMovie(movie) {
    this.router.navigate(['movies/', movie.id, 'edit']);
  }

  ngOnInit() {

  }
}
