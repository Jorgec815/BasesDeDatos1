import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipoService } from 'src/app/servicios/equipo.service';
import { UnidadDeportivaService } from 'src/app/servicios/unidad-deportiva.service';
import { OlimpiadasService } from 'src/app/servicios/olimpiadas.service';
import { ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  

  empleado = {
    codigo: '',
  }

  

  formRegistro: FormGroup;
  usuario: any

  constructor(private unidadService: UnidadDeportivaService, private router:Router) {
  }

  ngOnInit(): void {
    this.formRegistro = new FormGroup({
      codigo : new FormControl('', [Validators.required]),
    })
  }

  actualizarUsuario(){
    var cod = this.formRegistro.get('codigo').value
    
    this.empleado.codigo = cod

    console.log(this.empleado)

    this.unidadService.getCargo(this.empleado.codigo).subscribe(
      (data) => {
        if(data[0] != null){
          this.usuario = data[0]
          Swal.fire({
            title: 'Registro correcto',
            text: `Se ingresaron correctamente los datos`,
            icon: 'success',
          }).then((result) => {
            if (this.usuario.IDCARGO == '1'){
              var route = "asistenciaGeneral"
              this.router.navigate([route])
            }else if (this.usuario.IDCARGO == '3'){
              var route = "reportes"
              this.router.navigate([route])
            }else {
              Swal.fire({
                title: 'Error',
                text: `Usted no se encuentra habilidado para el sistema`,
                icon: 'warning',
             })
            }
          })
        }else{ 
          Swal.fire({
            title: 'Error',
            text: `Por favor verifique usuario y contraseña`,
            icon: 'warning',
         })
        }
      }
    ) 

  }
}
