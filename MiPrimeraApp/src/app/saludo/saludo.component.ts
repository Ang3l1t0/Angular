import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  mensaje: string;
  identifInput: string;

  constructor() {
    this.mensaje = 'Un saludo a todos';
    this.identifInput = 'text';

    setTimeout(() => {
      this.mensaje = 'Otro mensaje diferente';
    }, 3000);
  }

  ngOnInit(): void {
  }

}
