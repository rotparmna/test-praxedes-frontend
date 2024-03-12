import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class EpisodeService{

    private baseUrl = 'https://rickandmortyapi.com/api/episode';

    constructor(private http: HttpClient) { }

    getEpisodes(page: number): Observable<any>{
        const url = `${this.baseUrl}?page=${page}`;
        return this.http.get<any>(url);
    }
}