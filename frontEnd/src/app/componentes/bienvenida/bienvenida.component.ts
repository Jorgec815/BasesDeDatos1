import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipoService } from 'src/app/servicios/equipo.service';
import { OlimpiadasService } from 'src/app/servicios/olimpiadas.service';
import { ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  

  persona = {
    usuario: '',
    pass: ''
  }

  

  formRegistro: FormGroup;
  usuario: any

  constructor(private olimpiadaService: OlimpiadasService, private router:Router) {
  }

  ngOnInit(): void {
    this.formRegistro = new FormGroup({
      usuario : new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required])
    })
  
  }

  actualizarUsuario(){
    var usr = this.formRegistro.get('usuario').value
    var con = this.formRegistro.get('contrasena').value
    
    this.persona.usuario = usr
    this.persona.pass = con

    console.log(this.persona)

    this.olimpiadaService.postUsuario(this.persona).subscribe(
      (data) => {
        if(data[0] != null){
          this.usuario = data[0]
          Swal.fire({
            title: 'Registro correcto',
            text: `Se ingresaron correctamente los datos`,
            icon: 'success',
          }).then((result) => {
            if (result.value){
              var route = "evento/"+this.usuario.CODPERSONA
              this.router.navigate([route])
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
