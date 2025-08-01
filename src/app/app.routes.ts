import { Routes } from '@angular/router';
import { ClienteManagement } from './pages/cliente-management/cliente-management';

export const routes: Routes = [
    {path: '', component: ClienteManagement}, // Ruta por defecto indica lo que se ponga en esta vista
    //{path: 'Clienteview', component: ClienteManagement} implementacion si no seria esta la pagina principal
];
