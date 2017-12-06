import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// We need this because we use 'map'
// 'map' is like middleware which transforms the response, so that we can subscribe to it
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { }

  public getNews(): Observable<any> {
    let url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c1c0ec9ab586453aba7d160da8c82d47';
    return this.http.get(url).map(data => data);
  }
}
