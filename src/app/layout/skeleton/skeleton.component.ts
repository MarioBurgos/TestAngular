import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit, AfterViewInit {

  public loader = 'assets/img/loader.gif';
  public isLoading = true;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
          this.isLoading = false;
    }, 200);
  }

  ngOnInit(): void {
  }

}
