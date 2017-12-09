import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { Observable } from "rxjs";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieListComponent implements OnInit {

  public movies: Movie[];
  public movie: Movie;
  public showSpinner: boolean = true;

  constructor(private router: Router, private data: DataService) {
    data.getMovies().subscribe(movies => {
      this.showSpinner = false;
      this.movies = movies;
      // console.log(this.movies);
    });
  }

  navigateToMovie(id: string) {
    this.router.navigate(['movies/', id]);
  }

  ngOnInit() {

  }
}