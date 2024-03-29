import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators, AbstractControl } from '@angular/forms';
import { OlimpiadasService } from 'src/app/servicios/olimpiadas.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  sedes: any[]
  areas: any[]
  deportes: any[]
  sedeSelected: boolean
  areaSelected: boolean
  deporteSelected: boolean
  sede :any
  area: any
  deporte: any
  codPersona : string
  formEvento : FormGroup
  constructor(private formBuilder: FormBuilder, private olimpiadas : OlimpiadasService,  private rutaActiva: ActivatedRoute, private router: Router ) { 
    this.loadSedes()
    this.sedeSelected=false;
    this.areaSelected=false;
    this.codPersona = rutaActiva.snapshot.params.cod
    console.log(this.codPersona)
  }


  loadSedes(){
    this.olimpiadas.getSedes().subscribe((data:any) =>{
      if (data) {
        this.sedes = data;
      }
    }, (error) =>{
      Swal.fire({
        title: 'Error en la operación', 
        text: `No se encontraron datos registrados ${JSON.stringify(error)}`,
        icon: 'warning',
        showConfirmButton: false,
        timer: 2500
      })
    })
  }

  loadAreas(idSede: string){
    this.olimpiadas.getAreas(idSede).subscribe((data:any) =>{
      if (data) {
        this.areas = data;
      }
    }, (error) =>{
      Swal.fire({
        title: 'Error en la operación', 
        text: `No se encontraron datos registrados ${JSON.stringify(error)}`,
        icon: 'warning',
        showConfirmButton: false,
        timer: 2500
      })
    })
  }

  loadUnicos(idSede: string){
    this.olimpiadas.getUnicos(idSede).subscribe((data:any) =>{
      if (data) {
        this.deportes = data;
      }
    }, (error) =>{
      Swal.fire({
        title: 'Error en la operación', 
        text: `No se encontraron datos registrados ${JSON.stringify(error)}`,
        icon: 'warning',
        showConfirmButton: false,
        timer: 2500
      })
    })
  }

  loadDeportes(idArea: string){
    this.olimpiadas.getDeportes(idArea).subscribe((data:any) =>{
      if (data) {
        this.deportes = data;
      }
    }, (error) =>{
      Swal.fire({
        title: 'Error en la operación', 
        text: `No se encontraron datos registrados ${JSON.stringify(error)}`,
        icon: 'warning',
        showConfirmButton: false,
        timer: 2500
      })
    })
  }

  guardarEvento(){
    var date = this.formEvento.get('fecha').value
    var time = this.formEvento.get('duracion').value
    var fechas : string = ""+date
    var duracions : string = ""+time
    var evento = {
      fecha: fechas,
      duracion: duracions,
      participantes: this.formEvento.get('participantes').value,
      codpersona: this.codPersona,
      sede: this.sede,
      area: this.area,
      deporte: Number(this.deporte)
    }

    console.log(evento)

    this.olimpiadas.postEvento(evento).subscribe((data)=>{
      if (data[0] != null){
        Swal.fire({
          title: 'Registro correcto',
          text: `Se registro el evento de manera correcta`,
          icon: 'success',
        }).then((result) => {
          if (result.value){
            var route = "prestamo/"+this.codPersona
            this.router.navigate([route])
          }
        })
      }else{
        Swal.fire({
          title: 'Error en la operación', 
          text: `No se refistro el evento`,
          icon: 'warning',
          showConfirmButton: false,
          timer: 2500
        })
      }
    })
  }


  onChangeS(){
    this.sede = this.formEvento.get('sede').value
    console.log(this.sede)

    if(Number(this.sede) <= 104){
      this.loadUnicos(this.sede)
    }else{
      this.loadAreas(this.sede)
    }
  }

  onChangeA(data){
    this.area = this.formEvento.get('area').value
    console.log(this.area)
    this.loadDeportes(this.area)
  }

  onChangeD(data){
    this.deporte = this.formEvento.get('deporte').value
    console.log(this.deporte)
  }




  ngOnInit(): void {
    this.formEvento = this.formBuilder.group({
      sede: ['', Validators.required],
      area: ['', Validators.required],
      deporte: ['', Validators.required],
      fecha: ['', Validators.required],
      duracion: ['', Validators.required],
      participantes: ['', Validators.required],
    });
  }

}
