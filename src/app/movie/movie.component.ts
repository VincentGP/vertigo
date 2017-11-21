import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from '../movie';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieComponent implements OnInit {

  // For retrieving a single movie
  movieDocument: AngularFirestoreDocument<Movie>;
  movie: Observable<Movie>;

  id: string;
  showSpinner: boolean = true;


  constructor(private db: AngularFirestore, private route: ActivatedRoute) { 
    route.params.subscribe(params => {
      this.id = params['id'];
    });
   }

  ngOnInit() {
    this.movieDocument = this.db.doc('movies/' + this.id);
    this.movie = this.movieDocument.valueChanges();
    this.movie.subscribe(() => this.showSpinner = false)
  }
}
