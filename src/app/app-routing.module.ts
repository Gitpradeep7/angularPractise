import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngcontainerComponent } from './angcontainer/angcontainer.component';
import { AngcontentComponent } from './angcontent/angcontent.component';
import { AngtemplateComponent } from './angtemplate/angtemplate.component';

const routes: Routes = [{path:'',component:AngcontainerComponent},
  {path:'ngcontainer',component:AngcontainerComponent},
  {path:'ngcontent',component:AngcontentComponent},
  {path:'ngtemplate',component:AngtemplateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
