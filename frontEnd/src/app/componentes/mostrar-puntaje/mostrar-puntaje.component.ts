import { Component, OnInit } from '@angular/core';
import {EquipoService} from '../../servicios/equipo.service'
import {Equipo, Partido} from '../../servicios/equipo.service'


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
  
  equipo: Equipo={
    id_equipo: 0,
    nombre: ' ',
    puntos: 0,
    partidos_jugados:0,
    partidos_ganados:0,
    partidos_empatados:0,
    partidos_perdidos:0,
    goles_favor:0,
    goles_contra:0,
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

  agregarPartido(){
      delete this.equipo.puntos;
      delete this.equipo.partidos_jugados;
      delete this.equipo.partidos_ganados;
      delete this.equipo.partidos_empatados;
      delete this.equipo.partidos_perdidos;
    if(this.partido.goles_equipo1 > this.partido.goles_equipo2){
      this.equipo.id_equipo = this.partido.id_equipo1;
      this.equipo.goles_favor = this.partido.goles_equipo1;
      this.equipo.goles_contra = this.partido.goles_equipo2;
      this.EquipoService.agregarVictoria(this.equipo.id_equipo, this.equipo).subscribe();
      this.equipo.id_equipo = this.partido.id_equipo2;
      this.equipo.goles_favor = this.partido.goles_equipo2;
      this.equipo.goles_contra = this.partido.goles_equipo1;
      this.EquipoService.agregarPerdida(this.equipo.id_equipo, this.equipo).subscribe();
    }else if(this.partido.goles_equipo2> this.partido.goles_equipo1){
      this.equipo.id_equipo = this.partido.id_equipo1;
      this.equipo.goles_favor = this.partido.goles_equipo1;
      this.equipo.goles_contra = this.partido.goles_equipo2;
      this.EquipoService.agregarPerdida(this.equipo.id_equipo, this.equipo).subscribe();
      this.equipo.id_equipo = this.partido.id_equipo2;
      this.equipo.goles_favor = this.partido.goles_equipo2;
      this.equipo.goles_contra = this.partido.goles_equipo1;
      this.EquipoService.agregarVictoria(this.equipo.id_equipo, this.equipo).subscribe();
    }else{
      this.equipo.id_equipo = this.partido.id_equipo1;
      this.equipo.goles_favor = this.partido.goles_equipo1;
      this.equipo.goles_contra = this.partido.goles_equipo2;
      this.EquipoService.agregarEmpate(this.equipo.id_equipo, this.equipo).subscribe();
      this.equipo.id_equipo = this.partido.id_equipo2;
      this.equipo.goles_favor = this.partido.goles_equipo2;
      this.equipo.goles_contra = this.partido.goles_equipo1;
      this.EquipoService.agregarEmpate(this.equipo.id_equipo, this.equipo).subscribe();
    }
    this.mostrarPuntajes()
  }
}
