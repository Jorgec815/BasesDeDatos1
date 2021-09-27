import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';


const routes: Routes = [
  {path: '', redirectTo:'/agregar', pathMatch: 'full'},
  {path: 'agregar', component:AgregarComponent},
  {path: 'bienvenida/:id', component: BienvenidaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
