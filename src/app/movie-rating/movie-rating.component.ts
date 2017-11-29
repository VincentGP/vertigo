import { Movie } from './../movie';
import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieRatingComponent implements OnInit {

  public id: string;
  public movie: Movie;
  public rating;

  constructor(private router: Router, private route: ActivatedRoute, private data: DataService) { 
    route.params.subscribe(params => {
      this.id = params['id'];
      // Hardcodes for now
      this.movie = data.getMovie('con-air');
    });
  }
  average(arr): number {
    return arr.reduce((p, c) => p + c, 0) / arr.length;
  }
  
  ngOnInit() {
    this.rating = this.average(this.movie.ratings);
  }

}
