import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistenciageneral',
  templateUrl: './asistenciageneral.component.html',
  styleUrls: ['./asistenciageneral.component.css']
})
export class AsistenciageneralComponent implements OnInit {

  now: Date;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.now = new Date();
 
    setInterval(() => {
 
      this.now = new Date();
 
    }, 1000);
  }


  vistaDocente() {
    var route = "asistenciaDocente"
    this.router.navigate([route])
  }

  vistaPasante() {
    var route = "asistenciaPasante"
    this.router.navigate([route])
  }

  vistaAsistente() {
    var route = "asistenciaAsistente"
    this.router.navigate([route])
  }
}
