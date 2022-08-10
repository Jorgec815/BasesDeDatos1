import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnidadDeportivaService {

  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  //Obetener Cargo del código provisto
  getCargo(codigo: string) {
    return this.http.get(this.url + 'cargo/' + codigo)
  }

}
