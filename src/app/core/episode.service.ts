import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class EpisodeService{

    private baseUrlEpisodes = 'https://rickandmortyapi.com/api/episode';
    private baseUrlCharacter = 'https://rickandmortyapi.com/api/character';

    constructor(private http: HttpClient) { }

    getEpisodes(page: number): Observable<any>{
        const url = `${this.baseUrlEpisodes}?page=${page}`;
        return this.http.get<any>(url);
    }

    getEpisode(idEpisode: number): Observable<any>{
        const url = `${this.baseUrlEpisodes}/${idEpisode}`;
        return this.http.get<any>(url);
    }

    getCharacters(idsEpisodeFilters: string[]): Observable<any>{
        const url = `${this.baseUrlCharacter}/${idsEpisodeFilters}`;
        return this.http.get<any>(url);
    }
}