import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';

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

  public isLoading: boolean = true;

  constructor(private router: Router, private data: DataService) {
    this.movie = new Movie('', null);
    data.getMovies().subscribe(data => {
      this.movies = data;
      this.isLoading = false; 
    });
  }

  public addMovie(movie: Movie, form) {
    if(form.valid) {
      this.data.createMovie(movie);
      this.movies.push(movie);
    } else {
      alert('The form wasn\'t valid.');
    }
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
