import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.scss']
})
export class TitleH1Component implements OnInit, OnChanges  {

  @Input() text: string;
  @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'dark';
  @Input() priceEuros: number;
  public priceDollar: number;
  public priceYen: number;

  constructor() {
    this.text = '';
    this.type = 'primary';
    this.priceEuros = 0;
    this.priceDollar = 0;
    this.priceYen = 0;
   }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.priceEuros && changes.priceEuros.currentValue){
      this.priceEuros = changes.priceEuros.currentValue;
      this.priceDollar = this.priceEuros * this.getCurrentDollarValueFromApi();
      this.priceYen = this.priceEuros * this.getCurrentYenValueFromApi();
    }
  }

   getCurrentDollarValueFromApi(){
     return 1.18;
   }
   getCurrentYenValueFromApi(){
     return 129.91;
   }




}
