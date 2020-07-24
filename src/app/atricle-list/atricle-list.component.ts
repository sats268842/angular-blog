import { Component, OnInit } from '@angular/core';

import { Article } from '../articles.model';

import { ARTICLES } from '../mock-article';

import { ArticleService } from '../article.service';
import { SharedService } from '../shared.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-atricle-list',
  templateUrl: './atricle-list.component.html',
  styleUrls: ['./atricle-list.component.scss']
})
export class AtricleListComponent implements OnInit {


  articles: Article[] = [];
  constructor(private articleService: ArticleService,
              private titleService: Title,
              private sharedService: SharedService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.sharedService.blogTitle)
    this.getArticle();
  }

  getArticle(): void {
    this.articleService.getArticles().subscribe(articles =>
      this.articles = articles
      );
  }

}
