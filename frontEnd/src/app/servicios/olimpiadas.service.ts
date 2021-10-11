import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OlimpiadasService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }


  //obtener usuario
  postUsuario(data: any){
    return this.http.post(this.url+'persona', data)
  }

  //obtener todas las sedes
  getSedes(){
    return this.http.get(this.url+'sede')
  }

  //obtener todas las areas
  getAreas(idSede: string){
    return this.http.get(this.url+'area/'+idSede)
  }

  //obtener todas las areas
  getUnicos(idSede: string){
      return this.http.get(this.url+'deporte_area_unico/'+idSede)
  }
  


  //obtener todas las areas
  getDeportes(idArea: string){
    return this.http.get(this.url+'deporte_area/'+idArea)
  }

  //guardar evento
  postEvento(data){
    return this.http.post(this.url+"evento", data)
  }

  //obtener todas las areas
  getEquipos(idSede: string){
    return this.http.get(this.url+'equipo_sede/'+idSede)
  }

   //obtener todas las areas
  getEstados(){
    return this.http.get(this.url+'estado')
  } 


  //guardar prestamo
  postPrestamo(data){
    return this.http.post(this.url+"prestamo", data)
  }

  //actualizar inventario
  putInventario(idInv: string, data){
    return this.http.put(this.url+"inventario/"+idInv,data)
  }

}
