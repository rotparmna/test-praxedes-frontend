import { Component, OnInit } from '@angular/core';
import {EpisodeService} from './../../core/episode.services'

@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrl: './list-episodes.component.css'
})
export class ListEpisodesComponent implements OnInit{
  episodes: any[] = [];
  episodesFilters: any[] = [];
  pageIndex: number = 0;
  totalPages: number = 0;
  size = 20;
  displayedColumns = ['name', 'air_date', 'url'];
  lenght: number = 0;

  constructor(private episodeService: EpisodeService) {
    
  }

  ngOnInit(): void {
    this.getEpisodes(this.pageIndex+1);
    setTimeout(() => {
      this.getData({
        pageIndex: this.pageIndex, pageSize: this.size,
      }, false)
    }, 500);
  }

  getEpisodes(page: number) {
    this.episodeService.getEpisodes(page).subscribe(response => {
      this.episodes = response.results;
      this.totalPages = Math.ceil(response.info.count / this.size);
      this.lenght = response.info.count;
    });
  }

  getData(obj : any, reloadEpisodes: boolean) {
    let index = (this.size * obj.pageIndex),
    startingIndex = obj.pageIndex * obj.pageSize,
    endingIndex = startingIndex + obj.pageSize;
    this.pageIndex = obj.pageIndex;

    if (reloadEpisodes){
      this.getEpisodes(this.pageIndex+1);
    }
    setTimeout(() => {
      this.episodesFilters = this.episodes.filter(() => {
        index++;
        return index > startingIndex && index <= endingIndex ? true : false;
      });
    }, 1500);
    
  }
}
