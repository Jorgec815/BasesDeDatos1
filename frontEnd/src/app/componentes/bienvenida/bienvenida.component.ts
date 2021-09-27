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

  data = {
    correo: 'bcvbvc'
  }

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
    console.log("Load clientes")
    console.log(id)
    this.data.correo="dasdasd"
    this.equipoService.getUnEquipo(id).subscribe(
      (data: any)=>{
        this.cliente.id=data.ID
        this.cliente.nombre=data.NOMBRE
        this.cliente.apellido=data.APELLIDO
      }
    )
    this.cliente.usuario = this.nombre.substr(1,3)+this.apellido.substr(-3,3)+id
  }
  
}
