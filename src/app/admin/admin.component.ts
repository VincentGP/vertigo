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
    this.movie = new Movie('', null);
    data.getMovies().subscribe(data => {
      this.movies = data;
    });
  }



  public addMovie(movie: Movie) {

    this.data.createMovie(movie);
    this.movies.push(movie);
    // If the form is valid
    // if (form.status == "VALID") {
    //   // // Create id based on title
    //   // let id = this.title.replace(/\s+/g, '-').toLowerCase();
    //   // // Set the values
    //   // this.movie._id = id;
    //   // this.movie.title = this.title;
    //   // this.movie.director = this.director;
    //   // this.movie.runtime = this.runtime;
    //   // // Push to our data service
    //   // this.data.movies.push(this.movie);
    // } else {
    //   alert('The form isn\'t valid');
    // }
  }

  public deleteMovie(movie: Movie) {
    if (window.confirm("Are you sure?")) {
      this.data.deleteMovie(movie);
      // Remove from the DOM even though we haven't received any response
      let index = this.movies.findIndex(model => model._id === movie._id);
      this.movies.splice(index, 1);
    }
  }

  editMovie(movie) {
    this.router.navigate(['movies/', movie._id, 'edit']);
  }

  ngOnInit() {

  }
}
