import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedditCardComponent } from './components/reddit-card/reddit-card.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SubRedditBarComponent } from './components/sub-reddit-bar/sub-reddit-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditCardComponent,
    HomePageComponent,
    NavMenuComponent,
    SubRedditBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
