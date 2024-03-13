import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class FavoriteService{

    private baseUrl = 'https://pruebas.midasoft.co:5443/Apis_DLLO/Seleccion';

    constructor(private http: HttpClient) { }

    saveFavorite(idCharacter: number): Observable<any>{
        const url = `${this.baseUrl}/api/favoritos`;
        return this.http.post(url,{
            "id_caracter": idCharacter,
            "observaciones": "string",
            "usuario": "string"
        });
    }

    deleteFavorite(idCharacter: number): Observable<any>{
        const url = `${this.baseUrl}/api/favoritos`;
        return this.http.delete(url);
    }
}