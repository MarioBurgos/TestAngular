import { Component, OnDestroy, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from '@data/constants/carousel.const';
import { USERS_DATA } from '@data/constants/users.const';
import { UserService } from '@data/services/api/user.service';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { ICarouselItem } from '@shared/components/carousel/icarousel-item.metadata';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  //public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  public users: ICardUser[];// = USERS_DATA;
  public userSubscription: Subscription | undefined;
  public title:string;

  public priceEuros: number;

  constructor(
    private userService: UserService
  ) {
    this.users = [];
    this.userService.setTitle("Component UserList");
    this.title = this.userService.getTitle;

    this.priceEuros = 0;
  }
  ngOnDestroy(): void {
    if(this.userSubscription){
      //console.log("userService unsubscription!");
      this.userSubscription.unsubscribe();
      this.userService.clearTitle();
    }
  }

  ngOnInit(): void {
    this.getUsers();
  }


  addEuros(){
    this.priceEuros += 10;
  }

  getUsers() {
    this.userSubscription = this.userService
      .getAllUsers()
      .subscribe(r => this.users = (r.error) ? [] : r.data);
  }


}
