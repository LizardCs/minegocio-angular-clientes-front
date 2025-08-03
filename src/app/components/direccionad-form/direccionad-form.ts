import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Direccionservice, DireccionCrearDTO } from '../../services/direccionservice';
import { clienteParaDirecciones } from '../../shared/cliente-compartido';

@Component({
  selector: 'app-direccionad-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './direccionad-form.html',
  styleUrl: './direccionad-form.scss'
})
export class DireccionadForm {
  cancelardirad() {
    location.reload();
  }
  provincia = '';
  ciudad = '';
  direccion = '';
  cliente = clienteParaDirecciones;

  constructor(private direccionService: Direccionservice) { }

  guardar(): void {
    const cliente = this.cliente();
    if (!cliente?.id) {
      alert('No hay cliente seleccionado');
      return;
    }

    const nuevaDireccion: DireccionCrearDTO = {
      provincia: this.provincia,
      ciudad: this.ciudad,
      direccion: this.direccion,
      esMatriz: false
    };

    this.direccionService.crearDireccionAdicional(cliente.id, nuevaDireccion).subscribe({
      next: () => {
        alert('Dirección adicional guardada correctamente');
        this.resetear();
        location.reload();
      },
      error: (err) => {
        console.error('Error al guardar dirección adicional', err);
        alert('Error al guardar dirección');
      }
    });
  }

  resetear(): void {
    this.provincia = '';
    this.ciudad = '';
    this.direccion = '';
  }
}
