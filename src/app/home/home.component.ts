import { Movie } from './../movie';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public movies: Movie[];
  public averageRatings: number[] = [];
  public isLoading: boolean = true;

  constructor(private data: DataService) { 
    data.getMovies().subscribe(data => {
      this.movies = data;
      this.movies.forEach(movie => {
        this.calculateAverage(movie.ratings);
      });
      this.isLoading = false;
    });
  }

  public calculateAverage(ratings: number[]) {
    var average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
    this.averageRatings.push(average(ratings));
  }

  ngOnInit() {
  }

}
