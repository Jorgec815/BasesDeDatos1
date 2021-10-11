import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup,FormControl,Validators, AbstractControl } from '@angular/forms';
import { OlimpiadasService } from 'src/app/servicios/olimpiadas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {

  formPrestamo: FormGroup
  sedes : any[]
  equipos : any[]
  estados : any[]

  sede: any
  equipo : any
  estado : any
  inventario: any
  codPersona: any
  constructor(private formBuilder: FormBuilder, private olimpiadas : OlimpiadasService,  private rutaActiva: ActivatedRoute) { 
    this.codPersona= rutaActiva.snapshot.params.cod
    this.loadSedes()

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
  

  loadEquipos(idSede){
    this.olimpiadas.getEquipos(idSede).subscribe((data:any) =>{
      if (data) {
        this.equipos = data;
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

  loadEstados(){
    this.olimpiadas.getEstados().subscribe((data:any) =>{
      if (data) {
        this.estados = data;
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


  guardarPrestamo(){
    var date = this.formPrestamo.get('fecha').value
    var fechas : string = ""+date
    var evento = {
      fecha: fechas,
      codpersona: this.codPersona,
      sede: this.sede,
      estado: this.estado,
      inventario: Number(this.inventario),
      equipo:this.equipo
    }

    console.log(evento)

    this.olimpiadas.postPrestamo(evento).subscribe((data) =>{
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

  onChangeS(){
    this.sede = this.formPrestamo.get('sede').value
    console.log(this.sede)
    this.loadEquipos(this.sede)
  
  }

  onChangeEQ(data){
    var aux = this.formPrestamo.get('equipo').value
    this.equipo = aux.IDEQUIPO
    this.inventario = aux.CONSECINV
    console.log(this.equipo)
    this.loadEstados()
  }

  onChangeES(data){
    this.estado = this.formPrestamo.get('estado').value
    console.log(this.estado)
  }

  ngOnInit(): void {

    this.formPrestamo = this.formBuilder.group({
      sede: ['', Validators.required],
      equipo: ['', Validators.required],
      estado: ['', Validators.required],
      fecha: ['', Validators.required],
    });
  }

}
