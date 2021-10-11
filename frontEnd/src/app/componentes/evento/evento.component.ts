import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators, AbstractControl } from '@angular/forms';
import { OlimpiadasService } from 'src/app/servicios/olimpiadas.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Params } from '@angular/router';

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
  constructor(private formBuilder: FormBuilder, private olimpiadas : OlimpiadasService,  private rutaActiva: ActivatedRoute) { 
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

  loadDeportes(idArea: string){
    this.olimpiadas.getAreas(idArea).subscribe((data:any) =>{
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
      nparticipantes: this.formEvento.get('participantes').value,
      codPersona: this.codPersona,
      sede: this.sede.IDCOMPLEJO,
      area: this.area.IDAREA,
      deporte: this.deporte.IDDEPORTE
    }

    this.olimpiadas.postEvento(evento).subscribe((data)=>{
      if (data[0] != null){
        Swal.fire({
          title: 'Registro correcto',
          text: `Se registro el evento de manera correcta`,
          icon: 'success',
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


  onChangeS(data){
    console.log(data)
    if (data == undefined){
      this.sedeSelected = false;
    }else{
      this.sede = data
      console.log(this.sede)
      this.sedeSelected= true;
      this.loadAreas(this.sede.idComplejo)
    }
  }

  onChangeA(data){
    if (data == undefined){
      this.areaSelected = false;
    }else{
      this.area = data
      console.log(this.sede)
      this.areaSelected = true;
      this.loadDeportes(this.area.idArea)
    }
  }

  onChangeD(data){
    if (data == undefined){
      this.deporteSelected= false;
    }else{
      this.deporte = data
      console.log(this.sede)
      this.deporteSelected= true;
    }
  }




  ngOnInit(): void {
    this.formEvento = this.formBuilder.group({
      fecha: ['', Validators.required],
      duracion: ['', Validators.required],
      participantes: ['', Validators.required],
    });
  }

}
