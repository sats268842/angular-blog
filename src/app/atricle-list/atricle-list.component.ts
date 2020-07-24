import { Component, OnInit } from '@angular/core';

import { Article } from '../articles.model';

import { ARTICLES } from '../mock-article';
@Component({
  selector: 'app-atricle-list',
  templateUrl: './atricle-list.component.html',
  styleUrls: ['./atricle-list.component.scss']
})
export class AtricleListComponent implements OnInit {


  articles: Article[] = [];
  constructor() { }

  ngOnInit(): void {

    this.articles = ARTICLES;
  }

}
