import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Article } from './articles.model';
import { ARTICLES } from './mock-article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }


  getArticles(): Observable<Article[]> {
    const articles: Article[] = ARTICLES;
    return of(articles);

  }
}
