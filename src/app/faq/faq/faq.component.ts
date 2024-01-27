import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { QuestionsService } from 'src/app/services/questions.service';
import FaqItem from 'src/assets/interfaces/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent implements OnInit{
  faqList: FaqItem[] | [] = [];
  questionText: string = '';
  userEmail: string | null = '';


  constructor(
    private questionsService: QuestionsService,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.faqList = this.questionsService.getFaqList();
    this.userEmail = this.loginService.getUserEmail();
    console.log(this.faqList);
  }

  sendQuestion(): void {
    console.log({
      question: this.questionText,
      userEmail: this.userEmail,
    });
  }

}
