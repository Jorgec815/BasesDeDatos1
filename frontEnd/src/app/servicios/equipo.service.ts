import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Equipo} from '../models/equipo'

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  //obtener equipos

  getEquipos(){
    return this.http.get(this.url);
  }

  //obtener un equipo
  getUnEquipo(id: string){
    return this.http.get(this.url+'cliente/'+id)
  }

  //agregar un equipo
  agregarEquipo(data: any){
    return this.http.post(this.url + "cliente", data);
  }

  editarEquipo(id: string, data: any){
    return this.http.put(this.url + "cliente/"+id, data);
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