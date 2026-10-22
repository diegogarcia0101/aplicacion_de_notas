import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.page.html',
  styleUrls: ['./dia.page.scss'],
  standalone: false,
})
export class DiaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(' Esta iniciando esta pagina en:', environment.URL_BASE)
  }

}
