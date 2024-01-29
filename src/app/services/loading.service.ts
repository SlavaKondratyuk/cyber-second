import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoadingSubject.asObservable();

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      this.handleRouterEvent(event);
    });
  }

  private handleRouterEvent(event: any): void {
    if (event instanceof NavigationStart) {
      this.showLoading();
    } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
      this.hideLoading();
    }
  }

  showLoading(): void {
    this.isLoadingSubject.next(true);
  }

  hideLoading(): void {
    this.isLoadingSubject.next(false);
  }
}