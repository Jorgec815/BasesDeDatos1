import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asistencia-pasante',
  templateUrl: './asistencia-pasante.component.html',
  styleUrls: ['./asistencia-pasante.component.css']
})
export class AsistenciaPasanteComponent implements OnInit {

  formRegistro: FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.formRegistro = new FormGroup({
      codigo: new FormControl('', [Validators.required])
    })
  }

  consultarPasante(){
    Swal.fire({
      title: 'Formulario funcionando',
      text: `Se ingresaron correctamente los datos`,
      icon: 'success',
    })
  }

  registrarAsistencia(){
    Swal.fire({
      title: 'Aistsencia Registrada',
      text: `Se registró la asistencia`,
      icon: 'success',
    })
  }

}
