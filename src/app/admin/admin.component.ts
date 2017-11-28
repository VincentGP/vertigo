import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';

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

  addMovie() {
    // Create id based on title
    let id = this.title.replace(/\s+/g, '-').toLowerCase();
    // Set the values
    this.movie.id = id;
    this.movie.title = this.title;
    this.movie.director = this.director;
    this.movie.runtime = this.runtime;
    // Push to our data service
    this.data.movies.push(this.movie);
  }

  deleteMovie(movie) {
    let index = this.movies.findIndex(model => model.id === movie.id);
    this.movies.splice(index, 1);
  }

  ngOnInit() {

  }
}
