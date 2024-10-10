import { Component } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {
  public templateFlag = false;
  public arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
