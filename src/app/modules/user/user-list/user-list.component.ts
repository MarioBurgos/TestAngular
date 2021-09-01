import { Component, OnDestroy, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { UserService } from '@data/services/api/user.service';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { Subscription } from 'rxjs';

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
  public object: any;

  public stringVar: string;
  public dateVar: number;
  public currencyVar: number;
  public decimalVar:number;

  public user: {
    name: string,
    role: string,
    gender: 'M' | 'F'
  }

  constructor(
    private userService: UserService
  ) {
    this.users = [];
    this.userService.setTitle("PIPES");
    this.title = this.userService.getTitle;

    this.priceEuros = 0;
    this.object = {
        id: 1,
        name: "first",
        joinDate: 1599935113003
      }
    this.stringVar = "string";
    this.dateVar = (new Date()).getTime();
    this.currencyVar = 123456789;
    this.decimalVar = 3.14159265359;

    this.user = {
      name: 'Kwiji',
      role: 'Admin',
      gender: 'F'
    }

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
