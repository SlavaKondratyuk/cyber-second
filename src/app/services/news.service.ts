import { Injectable } from '@angular/core';
import { newsList } from 'src/assets/news-list/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  getNewsList() {
    return newsList;
  }
}
