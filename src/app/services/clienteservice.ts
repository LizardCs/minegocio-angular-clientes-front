import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
  id?: number;
  identificationType: string;
  identificationNumber: string;
  names: string;
  email: string;
  cellphone: string;
  mainProvince: string;
  mainCity: string;
  mainAddress: string;
}

export interface ClienteCrearDTO {
  identificationType: string;
  identificationNumber: string;
  names: string;
  email: string;
  cellphone: string;
  direccionMatriz: {
    provincia: string;
    ciudad: string;
    direccion: string;
  };
}


@Injectable({
  providedIn: 'root'
})

export class Clienteservice {

  
  private readonly API = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) {}

  // GET /api/clientes
  listarClientes(filtro: string = ''): Observable<Cliente[]> {
    const params = new HttpParams().set('filtro', filtro);
    return this.http.get<Cliente[]>(this.API, { params });
  }

  // GET /api/clientes/buscar?filtro=
  buscarClientes(filtro: string): Observable<Cliente[]> {
    const params = new HttpParams().set('filtro', filtro);
    return this.http.get<Cliente[]>(`${this.API}/buscar`, { params });
  }

  // POST /api/clientes
  crearCliente(cliente: ClienteCrearDTO): Observable<any> {
    return this.http.post<any>(this.API, cliente);
  }

  // PUT /api/clientes/{id}
  actualizarCliente(id: number, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.API}/${id}`, cliente);
  }

  // DELETE /api/clientes/{id}
  eliminarCliente(id: number): Observable<string> {
  return this.http.delete(`${this.API}/${id}`, { responseType: 'text' });
  }

  // GET /api/clientes/{id}
  obtenerClientePorId(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.API}/${id}`);
  }
  
}
