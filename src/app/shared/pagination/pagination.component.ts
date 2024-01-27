import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
@Input() currentPage: number = 1;
@Input() limit: number = 3;
@Input() total: number = 6;
@Output() changePage = new EventEmitter<number>();

pages: number[] = [];

  ngOnInit(): void {
    const pageCount = Math.ceil(this.total / this.limit);
    console.log(pageCount);
    for (let i = 0; i < pageCount; i++) {
      this.pages.push(i + 1);
    }
    console.log(this.pages);
  }

  onChangePage(page: number) {
    this.changePage.emit(page);
  }

  getPages() {
    return this.pages;
  }

  getLimit() {
    return this.limit;
  }

  getCurrentPage() {
    return this.currentPage;
  }

  getTotal() {
    return this.total;
  }
}
