import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieComponent implements OnInit {

  public id: string;
  public movie: Movie;


  constructor(private route: ActivatedRoute, private data: DataService) { 
    // Få id ud fra url'en
    route.params.subscribe(params => {
      this.id = params['id'];
    });
    // Hent film baseret på id
    this.movie = data.movies.find(model => model.id === this.id);

   }

  ngOnInit() {

  }
}
