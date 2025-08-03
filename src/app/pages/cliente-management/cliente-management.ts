import { Component } from '@angular/core';
import { ClienteForm } from "../../components/cliente-form/cliente-form";
import { ClienteList } from '../../components/cliente-list/cliente-list';
import { DireccionadForm } from '../../components/direccionad-form/direccionad-form';
import { DireccionesList } from '../../components/direcciones-list/direcciones-list';
import {HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cliente-management',
  imports: [ClienteList, DireccionadForm, DireccionesList, HttpClientModule ],
  templateUrl: './cliente-management.html',
  styleUrl: './cliente-management.scss',

})

export class ClienteManagement {

}
