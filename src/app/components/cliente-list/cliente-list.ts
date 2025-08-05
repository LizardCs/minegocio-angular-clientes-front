import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Clienteservice, Cliente } from '../../services/clienteservice';
import { HttpClientModule } from '@angular/common/http';
import { clienteParaDirecciones, clienteSeleccionado } from '../../shared/cliente-compartido';
import { ClienteForm } from "../cliente-form/cliente-form";
import { PRIMENG_IMPORTS } from '../../primeng.imports';

@Component({
  selector: 'app-cliente-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ClienteForm,
    ...PRIMENG_IMPORTS
],

  templateUrl: './cliente-list.html',
  styleUrl: './cliente-list.scss'
})
export class ClienteList implements OnInit {
  clientes: Cliente[] = [];
  filtro: string = '';

  mostrarFormularioCliente = signal(false);

  constructor(private clienteService: Clienteservice) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.clienteService.listarClientes().subscribe({
      next: (data) => this.clientes = data,
      error: (err) => console.error('Error al cargar clientes', err)
    });
  }

  buscar(): void {
    if (this.filtro.trim()) {
      this.clienteService.buscarClientes(this.filtro.trim()).subscribe({
        next: (data) => this.clientes = data,
        error: (err) => console.error('Error al buscar clientes', err)
      });
    }
  }

  limpiar(): void {
    this.filtro = '';
    this.cargarClientes();
    //location.reload();
  }

  eliminarCliente(id?: number): void {
    if (id && confirm('¿Estás seguro de eliminar este cliente?')) {
      this.clienteService.eliminarCliente(id).subscribe({
        next: () => this.cargarClientes(),
        error: (err) => console.error('Error al eliminar cliente', err)
      });
    }
  }

  editarCliente(cliente: Cliente): void {
    clienteSeleccionado.set(cliente);
    this.mostrarFormularioCliente.set(true);
  }

  verDireccionesAdicionales(cliente: Cliente): void {
    clienteParaDirecciones.set(cliente);
  }

  nuevoCliente(): void {
    clienteSeleccionado.set(null);
    this.mostrarFormularioCliente.set(true);
  }

  cancelarFormulario(): void {
    clienteSeleccionado.set(null);
    this.mostrarFormularioCliente.set(false);
  }
}
