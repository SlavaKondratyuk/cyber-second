import { Component, Input } from '@angular/core';
import { newsList } from 'src/assets/news-list/news';
import Article from 'src/assets/interfaces/article';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent {
  @Input() article: Article | undefined;

  maxAllowedDescriptionLength = 200;
}
