import { Component, OnInit } from '@angular/core';
import {EquipoService} from '../../servicios/equipo.service'
import {Equipo} from '../../models/equipo'
import {Partido} from '../../models/partido'


@Component({
  selector: 'app-mostrar-puntaje',
  templateUrl: './mostrar-puntaje.component.html',
  styleUrls: ['./mostrar-puntaje.component.css']
})
export class MostrarPuntajeComponent implements OnInit {


  ListarEquipos: Equipo[];

  partido: Partido={
    id_equipo1: 0,
    id_equipo2: 0,
    goles_equipo1:0,
    goles_equipo2:0
  }
  

  constructor(private EquipoService: EquipoService) { }

  ngOnInit(): void {
    this.mostrarPuntajes();
  }

  mostrarPuntajes(){
    this.EquipoService.getEquipos().subscribe(
      res=>{
        this.ListarEquipos = <any>res;
      },
      err => console.log(err)
    );
  }

}
