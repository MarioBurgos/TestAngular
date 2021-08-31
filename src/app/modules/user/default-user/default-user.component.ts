import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-user',
  templateUrl: './default-user.component.html',
  styleUrls: ['./default-user.component.scss']
})
export class DefaultUserComponent implements OnInit {

  public message:string = "";
  public isShow = false;
  public style = {
    background: 'red',
    borderRadius: '5px',
    width: '50%',
    padding: '5px',
    color: '#FFFFFF',
    fontWeight: '600',
  }


  constructor() { }

  ngOnInit(): void {
  }

  showError(){
    this.style.background = 'red';
    this.message = '* ERROR !';
    this.isShow = true;
    setTimeout(() => {
      this.toggleIsShow();
    }, 1000);

  }

  showSuccess(){
    this.style.background = 'green';
    this.message = '* SUCCESS !';
    this.isShow = true;
    setTimeout(() => {
      this.toggleIsShow();
    }, 1000);
  }

  toggleIsShow(){
    this.isShow = !this.isShow;
  }

}
