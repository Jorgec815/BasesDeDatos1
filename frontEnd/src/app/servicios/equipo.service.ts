import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url = '/api';
  constructor(private http: HttpClient) { }

  //obtener equipos

  getEquipos(){
    return this.http.get(this.url);
  }

  //obtener un equipo
  getUnEquipo(id: string){
    return this.http.get(this.url+'/'+id)
  }

  //agregar un equipo
  agregarEquipo(equipo:Equipo){
    return this.http.post(this.url, equipo);
  }


  //eliminar equipo

  eliminarEquipo(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar equipo
  agregarVictoria(id:number, equipo:Equipo){
    return this.http.put(this.url+'/ganaEquipo/'+id, equipo);
  }

  agregarPerdida(id:number, equipo:Equipo){
    return this.http.put(this.url+'/pierdeEquipo/'+id, equipo);
  }

  agregarEmpate(id:number, equipo:Equipo){
    return this.http.put(this.url+'/empate/'+id, equipo);
  }

  //contarRegistros
  contarRegistros(){
     return this.http.get(this.url+'/cantidadEquipos')
  }
}


export interface Equipo{
  id_equipo:number;
  nombre: string;
  puntos: number;
  partidos_jugados: number;
  partidos_ganados: number;
  partidos_empatados: number;
  partidos_perdidos: number;
  goles_favor: number;
  goles_contra: number;
}

export interface Partido{
  id_equipo1:number;
  id_equipo2: number;
  goles_equipo1: number;
  goles_equipo2: number;
}
