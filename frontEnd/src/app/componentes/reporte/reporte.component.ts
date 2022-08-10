import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  now: Date;
  formRegistro: FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.now = new Date();
 
    setInterval(() => {
 
      this.now = new Date();
 
    }, 1000);

    this.formRegistro = new FormGroup({
      opcion: new FormControl('', [Validators.required])
    })
  }

  consultar(){
    Swal.fire({
      title: 'Consulta hecha',
      text: `Se ingresaron correctamente los datos`,
      icon: 'success',
    })
    var op = this.formRegistro.get('opcion').value
    console.log(op)
  }

}
