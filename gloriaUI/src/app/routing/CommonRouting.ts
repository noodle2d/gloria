import {Routes} from "@angular/router";
import {TeamComponent} from "../components/team/team.component";
import {HomeComponent} from "../components/home/home.component";
import {HistoryComponent} from "../components/history/history.component";
import {GalleryComponent} from "../components/gallery/gallery.component";

export const routerConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

]
