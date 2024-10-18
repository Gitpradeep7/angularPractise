import { Component } from '@angular/core';



@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.scss']
})
export class FormCompComponent {
  // address = new Address();
  ngOnInit() {
  }
  // onSubmit() {
  //   alert('Thanks for submitting! Data: ' + JSON.stringify(this.address));
  // }
}
// export class Address {
//   constructor(
//     public firstname?: string,
//     public lastname?: string,
//     public address?: string,
//     public city?: string,
//     public state?: string,
//     public postalcode?: string
//   ) {}
// }
