import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { OneCompComponent } from './one-comp/one-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    OneCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
