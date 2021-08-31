import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-user',
  templateUrl: './default-user.component.html',
  styleUrls: ['./default-user.component.scss']
})
export class DefaultUserComponent implements OnInit {

  public cards: {
    title: string;
    body?: string;
    isPrimary: boolean;
    isDisabled: boolean;
  }[] = [
      {
        title: "Card Primary",
        isPrimary: true,
        isDisabled: false,
      },
      {
        title: "Card Primary",
        isPrimary: true,
        isDisabled: false,
      },
      {
        title: "Card Primary",
        isPrimary: true,
        isDisabled: false,
      },
      {
        title: "Card Primary",
        isPrimary: true,
        isDisabled: false,
      },
      {
        title: "Card Primary",
        isPrimary: true,
        isDisabled: false,
      },
      {
        title: "Card Secondary",
        isPrimary: false,
        isDisabled: false,
      },
      {
        title: "Card Disabled",
        body: "This card is disabled",
        isPrimary: true,
        isDisabled: true,
      },

    ];

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(card: {
    title: string;
    body?: string;
    isPrimary: boolean;
    isDisabled: boolean;
  }){
    card.isPrimary = !card.isPrimary;
  }
  disableCard(card: {
    title: string;
    body?: string;
    isPrimary: boolean;
    isDisabled: boolean;
  }){
    card.isDisabled = !card.isDisabled;
  }


}
