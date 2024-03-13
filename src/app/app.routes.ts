import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { ListEpisodesComponent } from './features/list-episodes/list-episodes.component';
import { ListCharacteresComponent } from './features/list-characteres/list-characteres.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
    {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'episodes',
        component: ListEpisodesComponent
      },
      {
        path: 'characteres/:episode',
        component: ListCharacteresComponent
      }
];

