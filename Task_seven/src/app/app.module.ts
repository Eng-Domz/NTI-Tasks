import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards';
import { NavBarComponent } from './nav-bar/nav-bar';
import { DataUserComponent } from './data-user/data-user.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NavBarComponent,
    DataUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 