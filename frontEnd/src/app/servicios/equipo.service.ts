import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Equipo} from '../models/equipo'

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