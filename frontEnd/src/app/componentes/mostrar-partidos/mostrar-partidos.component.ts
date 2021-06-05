import { Component, OnInit } from '@angular/core';
import {EquipoService} from '../../servicios/equipo.service'

@Component({
  selector: 'app-mostrar-partidos',
  templateUrl: './mostrar-partidos.component.html',
  styleUrls: ['./mostrar-partidos.component.css']
})
export class MostrarPartidosComponent implements OnInit {

  constructor(private EquipoService: EquipoService) { }

  ngOnInit(): void {
  }

}
