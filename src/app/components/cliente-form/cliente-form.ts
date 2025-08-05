import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente, Clienteservice } from '../../services/clienteservice';
import { clienteSeleccionado } from '../../shared/cliente-compartido';
import { PRIMENG_IMPORTS } from '../../primeng.imports';


@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ...PRIMENG_IMPORTS],
  templateUrl: './cliente-form.html',
  styleUrl: './cliente-form.scss'
})
export class ClienteForm {

  tipoIdentificaciones = [
    { name: 'RUC', code: 'RUC' },
    { name: 'DNI', code: 'DNI' },
    { name: 'Pasaporte', code: 'Pasaporte' }
  ];

  cancelar() {
    location.reload();
  }

  form: Cliente = {
    identificationType: '',
    identificationNumber: '',
    names: '',
    email: '',
    cellphone: '',
    mainProvince: '',
    mainCity: '',
    mainAddress: ''
  };

  constructor(private clienteService: Clienteservice) {
    // Escuchar cambios desde clienteSeleccionado
    effect(() => {
      const cliente = clienteSeleccionado();
      if (cliente) {
        this.form = { ...cliente };
      }
    });
  }

  guardar(): void {
    if (this.form.id) {
      // Editar
      this.clienteService.actualizarCliente(this.form.id, this.form).subscribe({
        next: () => {
          alert('Cliente actualizado correctamente');
          this.resetearFormulario();
          location.reload();
        },
        error: (err) => {
          console.error('Error al actualizar cliente:', err);
          alert('Error al actualizar cliente');
        }
      });
    } else {
      // Crear
      const clienteCrearDTO = {
        identificationType: this.form.identificationType,
        identificationNumber: this.form.identificationNumber,
        names: this.form.names,
        email: this.form.email,
        cellphone: this.form.cellphone,
        direccionMatriz: {
          provincia: this.form.mainProvince,
          ciudad: this.form.mainCity,
          direccion: this.form.mainAddress
        }
      };

      this.clienteService.crearCliente(clienteCrearDTO).subscribe({
        next: () => {
          alert('Cliente creado correctamente');
          this.resetearFormulario();
          location.reload();
        },
        error: (err) => {
          console.error('Error al crear cliente:', err);
          alert('Error al crear cliente');
        }
      });
    }
  }

  resetearFormulario(): void {
    clienteSeleccionado.set(null);
    this.form = {
      identificationType: '',
      identificationNumber: '',
      names: '',
      email: '',
      cellphone: '',
      mainProvince: '',
      mainCity: '',
      mainAddress: ''
    };
  }
}
