import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertyComponent } from './property/property.component';
import { AppPropertyListComponent } from './property-list/app-property-list.component';
import { PropertyCardComponent } from './property-card/property-card.component';
//import { PropertyListComponent } from './property-list/property-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PropertyComponent,
    AppPropertyListComponent,
    PropertyCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
