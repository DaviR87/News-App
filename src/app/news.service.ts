import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { News } from './models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsList: BehaviorSubject<News[]> = new BehaviorSubject<News[]>([]);

  constructor(private http: HttpClient) {
    this.getNews();
  }

  getNews() {
    this.http.get<News[]>('http://localhost:3000/news').subscribe(news => {
      this.newsList.next(news);
    }) 
  }

  addNews(news: News) {
    this.http.post('http://localhost:3000/news', news).subscribe(() => {
      this.getNews();
    })
  }
}
