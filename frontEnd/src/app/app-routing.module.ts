import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { EventoComponent } from './componentes/evento/evento.component';
import { PrestamoComponent } from './componentes/prestamo/prestamo.component';



const routes: Routes = [
  {path: '', redirectTo:'/bienvenida', pathMatch: 'full'},
  {path: 'agregar', component:AgregarComponent},
  {path: 'evento/:cod', component:EventoComponent},
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'prestamo/:cod', component: PrestamoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
