import { Component, effect, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { clienteParaDirecciones } from '../../shared/cliente-compartido';
import { Direccion, Direccionservice } from '../../services/direccionservice';

@Component({
  selector: 'app-direcciones-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './direcciones-list.html',
  styleUrl: './direcciones-list.scss'
})
export class DireccionesList {
  direcciones = signal<Direccion[]>([]);
  cliente = clienteParaDirecciones;
  private direccionService = inject(Direccionservice);
  constructor() {
    effect(() => {
      const cliente = clienteParaDirecciones();
      if (cliente?.id) {
        this.direccionService.obtenerDireccionesAdicionales(cliente.id).subscribe({
          next: (data) => this.direcciones.set(data),
          error: (err) => console.error('Error al cargar direcciones adicionales', err)
        });
      } else {
        this.direcciones.set([]);
      }
    });
  }
}
