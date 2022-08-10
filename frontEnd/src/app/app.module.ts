import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { EventoComponent } from './componentes/evento/evento.component';
import { PrestamoComponent } from './componentes/prestamo/prestamo.component';
import { AsistenciageneralComponent } from './componentes/asistenciageneral/asistenciageneral.component';
import { AsistenciaDocenteComponent } from './componentes/asistencia-docente/asistencia-docente.component';
import { AsistenciaPasanteComponent } from './componentes/asistencia-pasante/asistencia-pasante.component';
import { AsistenciaAsistenteComponent } from './componentes/asistencia-asistente/asistencia-asistente.component';
import { ReporteComponent } from './componentes/reporte/reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    BienvenidaComponent,
    EventoComponent,
    PrestamoComponent,
    AsistenciageneralComponent,
    AsistenciaDocenteComponent,
    AsistenciaPasanteComponent,
    AsistenciaAsistenteComponent,
    ReporteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
