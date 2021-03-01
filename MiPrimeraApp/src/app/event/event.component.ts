import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  mensaje: string;

  constructor() {
    this.mensaje = "Este es el mensaje predeterminado"
  }

  ngOnInit(): void {
  }

  onClick() {
    console.log('se ha pulsado el boton');
  }

  onChange($event) {
    console.log($event.target)
  }

  onMouseEnter() {
    //console.log('Entro en el div')
    this.mensaje = "Entraste al div"
  }

  onMouseOut() {
    this.mensaje = "Estas afuera del div"
  }
}
