import { Component, OnInit } from '@angular/core';
import {EquipoService} from '../../servicios/equipo.service';
import {Router} from '@angular/router';
import {Equipo} from '../../models/equipo'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formRegistro: FormGroup;
  constructor(private equipoService: EquipoService, private router:Router) {
  }

  ngOnInit(): void {
    this.formRegistro = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required,  	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    })
  }

  guardarCliente(){
    console.log("Guardar")
    var cliente = {
      nombre: this.formRegistro.get('nombre').value,
      apellido: this.formRegistro.get('apellido').value,
      fechaNacimiento: this.formRegistro.get('fecha_nacimiento').value,
      correo: this.formRegistro.get('correo').value,

    }
    console.log(cliente)
    this.equipoService.agregarEquipo(cliente).subscribe()

        Swal.fire({
          title: 'Registro correcto',
          text: `Se ingresaron correctamente los datos`,
          icon: 'success',
        })
      
    
  }

  get primCorreo(){
    return this.formRegistro.get('correo')
  }
  
}







