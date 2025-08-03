import { signal } from '@angular/core';
import { Cliente } from '../services/clienteservice';

export const clienteSeleccionado = signal<Cliente | null>(null);
export const clienteParaDirecciones = signal<Cliente | null>(null);