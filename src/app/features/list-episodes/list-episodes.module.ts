import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginator} from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'; 
import { RouterModule } from '@angular/router';

import { ListEpisodesRoutingModule } from './list-episodes-routing.module';
import { ListEpisodesComponent } from './list-episodes.component';


@NgModule({
  declarations: [
    ListEpisodesComponent
  ],
  imports: [
    CommonModule,
    ListEpisodesRoutingModule,
    MatPaginator, 
    MatTableModule, 
    MatIconModule, 
    RouterModule
  ]
})
export class ListEpisodesModule { }
