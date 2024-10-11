import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';

const materialHub = [
  MatTableModule,
  MatPaginatorModule,
  MatSidenavModule
  
]

@NgModule({
  declarations: [],
  imports: [materialHub],
  exports:[materialHub]
})
export class MaterialModule { }
