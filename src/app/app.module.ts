import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { OneCompComponent } from './one-comp/one-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { AngcontainerComponent } from './angcontainer/angcontainer.component';
import { AngcontentComponent } from './angcontent/angcontent.component';
import { AngtemplateComponent } from './angtemplate/angtemplate.component';
import { Router, RouterLink } from '@angular/router';
import { FormCompComponent } from './form-comp/form-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    OneCompComponent,
    MainComponent,
    AngcontainerComponent,
    AngcontentComponent,
    AngtemplateComponent,
    FormCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
