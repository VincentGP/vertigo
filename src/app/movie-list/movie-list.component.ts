import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieListComponent implements OnInit {

  public movies: Movie[];

  // showSpinner: boolean = true;

  constructor(private router: Router, private data: DataService) {
    this.movies = data.movies;
  }

  navigateToMovie(id) {
    this.router.navigate(['movies/', id]);
  }

  ngOnInit() {

  }
}