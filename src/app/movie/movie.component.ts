import { MovieRatingComponent } from './../movie-rating/movie-rating.component';
import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieComponent implements OnInit {
  
  public id: string;
  public movie: Movie;
  public movies: Movie[];
  public editMode: boolean = false;
  
  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {
    this.movies = data.movies; 
    // Få id ud fra url'en
    route.params.subscribe(params => {
      this.id = params['id'];
      // Hvis edit er et parameter i url'en, slå editMode til
      if (params['edit']) {
        this.editMode = true;
      }
    });
    
    // Hent film baseret på id
    this.movie = data.movies.find(model => model.id === this.id);
    
  }

  public save(id: string, title: string, director: string, runtime: number, form): void {
    console.log(form);
    let index = this.movies.findIndex(model => model.id === id);
    this.movie.title = title;
    this.movie.director = director;
    this.movie.runtime = runtime;
    // Push to the data service
    this.movies[index] = this.movie;
    // Navigate
    this.router.navigate(['admin']);
  }
  
  ngOnInit() {
    
  }
}
