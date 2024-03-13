import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodeService } from '../../core/episode.service';
import {MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list-characteres',
  standalone: true,
  imports: [MatCardModule,MatTableModule],
  templateUrl: './list-characteres.component.html',
  styleUrl: './list-characteres.component.css'
})
export class ListCharacteresComponent implements OnInit{
  idEpisode: any;
  nameEpisode: string = "";
  urlCharacters: any[] = [];
  characters: any[] = [];
  displayedColumns = ['name', 'image'];
  constructor(private activatedRoute: ActivatedRoute, 
    private episodeService: EpisodeService) {}

  ngOnInit() {
    this.idEpisode = this.activatedRoute.snapshot.params['episode'];
    this.episodeService.getEpisode(this.idEpisode).subscribe(response => {
      this.urlCharacters = response.characters;
      this.nameEpisode = response.name;
    });
    setTimeout(() => {
      this.getCharacters();
    }, 1500);
  }

  getCharacters(){
    const characterNames: string[] = [];
    for (const characterURL of this.urlCharacters) {
      const parts = characterURL.split('/');
      const name = parts[parts.length - 1];
      characterNames.push(name);
    }
    this.episodeService.getCharacters(characterNames).subscribe(response => {
      console.log(response);
      this.characters = response;
    });
  }
}
