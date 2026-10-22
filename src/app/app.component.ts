import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  menu = [
    {
      titulo: 'Dia',
      ruta: '/dia'
    },
    {
      titulo: 'Diario',
      ruta: '/diario'
    },
    {
      titulo: 'Agenda',
      ruta: '/agenda'
    },
    {
      titulo: 'Colores',
      ruta: '/colores'
    },
    {
      titulo: 'Persistencia de Datos',
      ruta: '/datos'
    }

  ];

  constructor() {}

}