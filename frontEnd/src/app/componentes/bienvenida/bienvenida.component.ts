import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipoService } from 'src/app/servicios/equipo.service';
import { ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  

  cliente = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    passv: ''
  }

  nombre : string;
  apellido : string;
  correo: string;
  fecha_nacimiento: string;
  formRegistro: FormGroup;
  usuario : string
  id : string;

  constructor(private equipoService: EquipoService, private router:Router, private rutaActiva: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.formRegistro = new FormGroup({
      contrasena: new FormControl('', [Validators.required]),
      conf_contrasena: new FormControl('', [Validators.required])
    })
    console.log(this.rutaActiva.snapshot.params.id)
    this.loadCliente(this.rutaActiva.snapshot.params.id)
  
  }

  actualizarContrasena(){
    console.log("Contraseña actualizada")
    var con = this.formRegistro.get('contrasena').value
    var con2 = this.formRegistro.get('conf_contrasena').value

    if(con === con2){
      this.cliente.passv=con
      this.equipoService.editarEquipo(this.cliente.id, this.cliente ).subscribe()
          Swal.fire({
            title: 'Registro correcto',
            text: `Se ingresaron correctamente los datos`,
            icon: 'success',
          })
    }else{
      Swal.fire({
        title: 'Error',
        text: `Por favor ingrese la misma contraseña`,
        icon: 'warning',
      })
    }
  }

  loadCliente(id: string){
    this.equipoService.getUnEquipo(id).subscribe(
      (data: any)=>{
        this.cliente.id=data[0].ID
        this.cliente.nombre=data[0].NOMBRE
        this.cliente.apellido=data[0].APELLIDO
        this.cliente.usuario = this.cliente.nombre.substring(0,2)+ this.cliente.apellido.substring(-3,3)+id
      }
    )
    
  }
  
}
