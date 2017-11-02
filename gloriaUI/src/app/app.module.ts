import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TeamComponent } from './components/team/team.component';
import { HistoryComponent } from './components/history/history.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import {routerConfig} from "./routing/CommonRouting";
import {TeamService} from "./services/team.service";
import {CarouselComponent} from "./components/carousel/carousel.component";
import { NewsComponent } from './components/news/news.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import {NewsService} from "./services/news.service";
import {SafePipe} from "./pipes/SafePipe";
import { ContactsFooterComponent } from './components/contacts-footer/contacts-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeamComponent,
    HistoryComponent,
    CarouselComponent,
    GalleryComponent,
    HomeComponent,
    NewsComponent,
    NewsListComponent,
    SafePipe,
    ContactsFooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [TeamService, NewsService],
  bootstrap: [AppComponent],

})


export class AppModule { }
