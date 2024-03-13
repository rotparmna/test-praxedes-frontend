import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { ListCharactersRoutingModule } from './list-characters-routing.module';
import { ListCharactersComponent } from './list-characters.component';


@NgModule({
  declarations: [
    ListCharactersComponent
  ],
  imports: [
    CommonModule,
    ListCharactersRoutingModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule
  ]
})
export class ListCharactersModule { }
