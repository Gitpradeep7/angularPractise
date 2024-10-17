import { Component } from '@angular/core';

@Component({
  selector: 'app-angcontent',
  templateUrl: './angcontent.component.html',
  styleUrls: ['./angcontent.component.scss']
})
export class AngcontentComponent {
  code:string=`<h1>ng-Content</h1>
<app-one-comp>
  <h5 header>Hello Team</h5>
  <p content>I have this ng content which I am showing at child component</p>
</app-one-comp>`;
}
