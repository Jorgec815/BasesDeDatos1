import { Component, OnInit } from '@angular/core';
import {Equipo, EquipoService} from '../../servicios/equipo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  registros: number;

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
  constructor(private EquipoService: EquipoService, private router:Router) {
  }

  ngOnInit(): void {
  }

  agregarEquipo(){
    delete this.equipo.id_equipo;
    delete this.equipo.puntos;
    delete this.equipo.partidos_jugados;
    delete this.equipo.partidos_ganados;
    delete this.equipo.partidos_empatados;
    delete this.equipo.partidos_perdidos;
    delete this.equipo.goles_favor;
    delete this.equipo.goles_contra;

    this.EquipoService.agregarEquipo(this.equipo).subscribe();
    this.router.navigate(['/puntajes'])    
  }

  contarEquipos(){
    this.EquipoService.contarRegistros().subscribe(
      res=>{
        console.log(res[0].total);
        this.registros = parseInt(res[0].total,10);
        if(this.registros >= 4){
          console.log("entro 1");
          window.alert("Ya hay 4 Equipos registrados");
        }else{
          console.log("entro 2");
          this.agregarEquipo();
        }
      },
      err => console.log(err)
    )
  }
}
