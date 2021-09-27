import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Equipo} from '../models/equipo'

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }


  //obtener un equipo
  getUnCliente(id: string){
    return this.http.get(this.url+'cliente/'+id)
  }

  //agregar un equipo
  agregarCliente(data: any){
    return this.http.post(this.url + "cliente", data);
  }

  editarCliente(id: string, data: any){
    return this.http.put(this.url + "cliente/"+id, data);
  }

}