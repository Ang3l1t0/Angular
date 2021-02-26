import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crono',
  templateUrl: './crono.component.html',
  styleUrls: ['./crono.component.css']
})
export class CronoComponent implements OnInit {

  sec: number;

  constructor() {
    this.sec = 10;
  }

  ngOnInit(): void { }

  onClick() {
    let interval = setInterval(() => {
      this.sec--;
      if (this.sec === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
}
