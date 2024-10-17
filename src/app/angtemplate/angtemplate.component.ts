import { Component } from '@angular/core';

@Component({
  selector: 'app-angtemplate',
  templateUrl: './angtemplate.component.html',
  styleUrls: ['./angtemplate.component.scss']
})
export class AngtemplateComponent {
  public templateFlag = false;
  code:string=`<p>angtemplate works!</p>
<h1>ng-Template</h1>
<div *ngIf="templateFlag; else elseData">Ng Template If Condition</div>
<ng-template #elseData>Ng Template Else Condition</ng-template>
<hr />`;
}
