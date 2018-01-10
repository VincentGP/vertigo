import { Observable } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import { Form } from '@angular/forms/src/directives/form_interface';
import { FormArray } from '@angular/forms/src/model';
import { OnClickEvent } from 'angular-star-rating';
import { OnHoverRatingChangeEvent } from 'angular-star-rating';
import { OnRatingChangeEven } from 'angular-star-rating';

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
  public isLoading: boolean = true;
  public ratingSubmitted: boolean = false;
  
  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {

    // Få id ud fra url'en
    route.params.subscribe(params => {
      this.id = params['id'];
      // Hvis edit er et parameter i url'en, slå editMode til
      if (params['edit']) {
        this.editMode = true;
      }
    });
    
    // Hent film baseret på id
    data.getMovie(this.id).subscribe(data => {
      this.movie = data;
      this.isLoading = false;
    });
  }

  // Hjemmelavet event
  onClick = ($event: OnClickEvent) => {
    // Skub rating til filmens rating array
    this.movie.ratings.push($event.rating);
    // So that you can only rate a movie once
    this.ratingSubmitted = true;
    // Opdater filmen
    this.data.updateMovie(this.movie);
  };

  public updateMovie(movie: Movie) {
    this.data.updateMovie(movie);
    // TO DO: Change this, bruges fordi APIen opdaterer for langsomt
    setTimeout(() => {
      this.router.navigate(['admin']);
    }, 1000);      
  }
  
  ngOnInit() {
  
  }
}
