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
  
  // For storing all movies
  public movies: Movie[];
  // For storing movie if user wants to add a new movie
  public movie: Movie = new Movie();
  public isLoading: boolean = true;

  constructor(private router: Router, private data: DataService) {
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
      alert('The form isn\'t valid. Please try again 💪');
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

  // Logic is in movie component
  editMovie(movie) {
    this.router.navigate(['movies/', movie._id, 'edit']);
  }

  ngOnInit() {

  }
}
