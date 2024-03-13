import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEpisodesComponent } from './list-episodes.component';

const routes: Routes = [{ path: '', component: ListEpisodesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEpisodesRoutingModule { }
