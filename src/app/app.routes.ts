import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';

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
      }
];

