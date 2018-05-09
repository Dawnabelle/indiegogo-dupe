import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
