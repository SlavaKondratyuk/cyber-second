import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  currentDate: string = '';
  private intervalId: any;

  constructor(private c: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.updateDateTime();
    
    this.intervalId = setInterval(() => {
      this.updateDateTime();
      this.c.detectChanges();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  updateDateTime(): void {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    this.currentTime = `${this.formatTimeComponent(hours)}:${this.formatTimeComponent(minutes)}:${this.formatTimeComponent(seconds)}`;

    this.currentDate = `${this.formatTimeComponent(day)}.${this.formatTimeComponent(month)}.${year}`;
  }

  formatTimeComponent(component: number): string {
    return component < 10 ? `0${component}` : `${component}`;
  }
}
