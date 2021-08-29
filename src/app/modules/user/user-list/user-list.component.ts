import { Component, OnInit } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: ICardUser[] = [
    {
      name: 'Kwijibo Klander',
      age: 36,
      description: 'Fullstack Developer',
      avatar: 'https://pickaface.net/gallery/avatar/ScottWhitehead51e40730c8b87.png',
      work: 'Project Manager'
    },
    {
      name: 'Kwijibo Klander',
      age: 36,
      description: 'Fullstack Developer',
      avatar: 'https://pickaface.net/gallery/avatar/ScottWhitehead51e40730c8b87.png',
      work: 'A large text that will deform the user cards then..'
    },
    {
      name: 'Kwijibo Klander',
      age: 36,
      description: 'Fullstack Developer',
      avatar: 'https://pickaface.net/gallery/avatar/ScottWhitehead51e40730c8b87.png'
    },
    {
      name: 'Kwijibo Klander',
      age: 36,
      description: 'Fullstack Developer',
      avatar: 'https://pickaface.net/gallery/avatar/ScottWhitehead51e40730c8b87.png'
    },
    {
      name: 'Kwijibo Klander',
      age: 36,
      description: 'Fullstack Developer',
      avatar: 'https://pickaface.net/gallery/avatar/ScottWhitehead51e40730c8b87.png',
      work: 'A large text that will deform the user cards then what would happen when they are in different rows?'

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
