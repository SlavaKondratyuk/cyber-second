import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import Article from 'src/assets/interfaces/article';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent implements OnInit {
  items: Article[] | [] = [];
  currentItems: Article[] | [] = [];
  newsTitle = 'новини';
  currentPage = 1;
  limit = 3;
  totalItems: number = 0;

  constructor(public newsService: NewsService) { }

  ngOnInit(): void {
    this.items = this.newsService.getNewsList();
    this.totalItems = this.items.length;
    this.currentItems = this.items.slice(0, this.limit);
  }

  changePage($event: any): void {
    this.currentPage = $event;
    this.setCurrentItems(this.currentPage);
  }

  setCurrentItems(currentPage: number): void {
    const lastItem = currentPage * this.limit;
    const firstItem = lastItem - this.limit;
    console.log(firstItem, lastItem);
    this.currentItems = this.items.slice(firstItem, lastItem);
  }
}
