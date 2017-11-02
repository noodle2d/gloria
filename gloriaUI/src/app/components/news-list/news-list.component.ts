import { Component, OnInit } from '@angular/core';
import {News} from "../../model/news";
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.loadTeamMembers();
  }

  loadTeamMembers(): void {
    this.newsService.getNews().then(newsList => this.newsList = newsList);
  }
}
