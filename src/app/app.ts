import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteForm } from './components/cliente-form/cliente-form';
import { ClienteList } from './components/cliente-list/cliente-list';
import { DireccionadForm } from './components/direccionad-form/direccionad-form';
import { DireccionesList } from './components/direcciones-list/direcciones-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ClienteForm, ClienteList, DireccionadForm, DireccionesList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('minegocio-angular-clientes-front');
}
