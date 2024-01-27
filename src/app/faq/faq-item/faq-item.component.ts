import { Component, ElementRef, HostListener, Input } from '@angular/core';
import FaqItem from 'src/assets/interfaces/faq';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.css']
})
export class FaqItemComponent {
  @Input() question: FaqItem = {
    question: '',
    answer: '',
  };

  answerVisible: boolean = false;

  constructor(private elementRef: ElementRef) {}

  toggleAnswer() {
    this.answerVisible = !this.answerVisible;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.answerVisible = false;
    }
  }
}
