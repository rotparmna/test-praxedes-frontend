import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class AuthService{
    constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    // Enviar datos de inicio de sesión a la API
    return this.http.post('https://pruebas.midasoft.co:5443/Apis_DLLO/Security/api/SEG', 
    { "password": password,
      "companyId": "10",
      "username": email,
      "desdeMs": true 
    });
  }

  logout(): Observable<any> {
    // Enviar solicitud de cierre de sesión a la API
    return this.http.post('api/logout', {});
  }

  isAuthenticated(): boolean {
    // Implementar la lógica para verificar si el usuario está autenticado
    // Puedes usar localStorage o una cookie para almacenar el token de autenticación
    return !!localStorage.getItem('token');
  }
}