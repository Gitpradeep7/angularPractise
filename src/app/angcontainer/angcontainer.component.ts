import { Component } from '@angular/core';

@Component({
  selector: 'app-angcontainer',
  templateUrl: './angcontainer.component.html',
  styleUrls: ['./angcontainer.component.scss']
})
export class AngcontainerComponent {
  public arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  code:string=`<ul>
    <ng-container *ngFor="let data of arrayData; let i = index">
      <li>{{ data }}</li>
    </ng-container>
  </ul>
  <mat-list>
  <mat-list-item *ngFor="let data of arrayData; let i = index">
    {{ data }}
  </mat-list-item>
</mat-list>`;
}
