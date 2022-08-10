import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-asistencia-docente',
  templateUrl: './asistencia-docente.component.html',
  styleUrls: ['./asistencia-docente.component.css']
})
export class AsistenciaDocenteComponent implements OnInit {

  formRegistro: FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.formRegistro = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required])
    })
  }

  consultarDocente(){
    Swal.fire({
      title: 'Formulario funcionando',
      text: `Se ingresaron correctamente los datos`,
      icon: 'success',
    })
  }

  registrarAsistencia(){
    Swal.fire({
      title: 'Formulario funcionando',
      text: `Asistencia Registrada`,
      icon: 'success',
    })
  }
}
