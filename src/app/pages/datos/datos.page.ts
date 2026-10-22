import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
  standalone: false,
})
export class DatosPage implements OnInit {

  label: string = '';
  input: string = '';

  constructor() { }

  ngOnInit() {
    this.cargarDatos();
  }

  async cargarDatos() {
    const { value } = await Preferences.get({ key: 'dato' });
    if (value) {
      this.label = value;
      this.input = value;
    } else {
      this.label = 'Dato sin guardar';
    }
  }

  async guardar() {
    this.label = this.input;

    await Preferences.set({
      key: 'dato',
      value: this.input
    });

  }

}
