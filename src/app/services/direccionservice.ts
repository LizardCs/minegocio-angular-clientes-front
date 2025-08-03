import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Direccion {
  id: number;
  provincia: string;
  ciudad: string;
  direccion: string;
  esMatriz: boolean;
}
// Tipo para crear dirección (sin `id`)
export type DireccionCrearDTO = Omit<Direccion, 'id'>;

@Injectable({
  providedIn: 'root'
})

export class Direccionservice {
  
   private readonly baseUrl = 'http://localhost:8080/api/direcciones';

  constructor(private http: HttpClient) {}

  // GET /api/direcciones/cliente/{clienteId}/adicionales
  obtenerDireccionesAdicionales(clienteId: number): Observable<Direccion[]> {
    return this.http.get<Direccion[]>(`${this.baseUrl}/cliente/${clienteId}/adicionales`);
  }

  // POST /api/direcciones/cliente/{clienteId}
  crearDireccionAdicional(clienteId: number, data: DireccionCrearDTO): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/cliente/${clienteId}`, data);
  }

}
