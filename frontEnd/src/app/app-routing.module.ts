import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { EventoComponent } from './componentes/evento/evento.component';
import { PrestamoComponent } from './componentes/prestamo/prestamo.component';
import { AsistenciageneralComponent } from './componentes/asistenciageneral/asistenciageneral.component';
import { AsistenciaDocenteComponent } from './componentes/asistencia-docente/asistencia-docente.component';
import { AsistenciaPasanteComponent } from './componentes/asistencia-pasante/asistencia-pasante.component';
import { AsistenciaAsistenteComponent } from './componentes/asistencia-asistente/asistencia-asistente.component';
import { ReporteComponent } from './componentes/reporte/reporte.component';






const routes: Routes = [
  {path: '', redirectTo:'/bienvenida', pathMatch: 'full'},
  {path: 'agregar', component:AgregarComponent},
  {path: 'evento/:cod', component:EventoComponent},
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'prestamo/:cod', component: PrestamoComponent},
  {path: 'asistenciaGeneral', component: AsistenciageneralComponent},
  {path: 'asistenciaDocente', component: AsistenciaDocenteComponent},
  {path: 'asistenciaPasante', component: AsistenciaPasanteComponent},
  {path: 'asistenciaAsistente', component: AsistenciaAsistenteComponent},
  {path: 'reportes', component: ReporteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
