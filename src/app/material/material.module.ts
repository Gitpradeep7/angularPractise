import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

const materialHub = [
  MatTableModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatListModule
  
]

@NgModule({
  declarations: [],
  imports: [materialHub],
  exports:[materialHub]
})
export class MaterialModule { }
