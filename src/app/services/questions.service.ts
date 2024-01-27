import { Injectable } from '@angular/core';
import FaqItem from 'src/assets/interfaces/faq';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  faqList: FaqItem[] = [
    {
      question: 'What is Exmoney?',
      answer: 'Exmoney is a cryptocurrency exchange platform that allows you to buy and sell cryptocurrencies with ease.'
    },
    {
      question: 'How do I get started?',
      answer: 'You can get started by creating an account with us. You can then proceed to buy or sell cryptocurrencies.'
    },
    {
      question: 'How do I create an account?',
      answer: 'You can create an account by clicking on the signup button on the top right corner of the page. You will be required to fill in your details and verify your email address.'
    },
    {
      question: 'How do I buy cryptocurrencies?',
      answer: 'You can buy cryptocurrencies by clicking on the buy button on the top left corner of the page. You will be required to select the cryptocurrency you want to buy and the amount you want to buy.'
    },
    {
      question: 'How do I sell cryptocurrencies?',
      answer: 'You can sell cryptocurrencies by clicking on the sell button on the top left corner of the page. You will be required to select the cryptocurrency you want to sell and the amount you want to sell.'
    },
    {
      question: 'How do I withdraw my funds?',
      answer: 'You can withdraw your funds by clicking on the withdraw button on the top left corner of the page. You will be required to select the cryptocurrency you want to withdraw and the amount you want to withdraw.'
    }
  ]

  getFaqList(): FaqItem[]  {
    return this.faqList;
  }
}
