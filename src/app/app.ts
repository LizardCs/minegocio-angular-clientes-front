import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PRIMENG_IMPORTS } from './primeng.imports';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...PRIMENG_IMPORTS],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('minegocio-angular-clientes-front');
}
