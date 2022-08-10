import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asistencia-asistente',
  templateUrl: './asistencia-asistente.component.html',
  styleUrls: ['./asistencia-asistente.component.css']
})
export class AsistenciaAsistenteComponent implements OnInit {

  formRegistro: FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.formRegistro = new FormGroup({
      codigo: new FormControl('', [Validators.required]),
      equipo: new FormControl('', [Validators.required])
    })
  }

  registrarAsistencia(){
    Swal.fire({
      title: 'Asistencia Registrada',
      text: `Asistencia registrada correctamente`,
      icon: 'success',
    })
  }

}
