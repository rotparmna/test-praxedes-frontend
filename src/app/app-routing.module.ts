import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }, 
{ path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
{ path: 'episodes', loadChildren: () => import('./features/list-episodes/list-episodes.module').then(m => m.ListEpisodesModule) },
{ path: 'characters/:episode', loadChildren: () => import('./features/list-characters/list-characters.module').then(m => m.ListCharactersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
