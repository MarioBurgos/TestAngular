import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-loader',
  templateUrl: './card-loader.component.html',
  styleUrls: ['./card-loader.component.scss']
})
export class CardLoaderComponent implements OnInit {

  //Input Styles
  @Input() imageSize = 75;
  @Input() barHeight = 15;
  @Input() bars = 1;

  //Final Properties
  public totalBars: {width: string}[] = [];
  public finalStyleImage = {};
  public finalHeightBar = "0";

  constructor() { }

  ngOnInit(): void {
    //calculate totalBars
    for(let i=0; i<this.bars; i++){
      const width = Math.floor(Math.random() * (100 - 85) + 85)
      this.totalBars.push({width: `${width}%`});
    }

    //Image Style
    this.finalStyleImage = {
      width: `${this.imageSize}px`,
      height: `${this.imageSize}px`,
    };

    //Bar Style
    this.finalHeightBar = `${this.barHeight}px`;
  }

}
