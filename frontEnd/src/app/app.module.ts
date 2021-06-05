import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarPuntajeComponent } from './componentes/mostrar-puntaje/mostrar-puntaje.component';
import { MostrarPartidosComponent } from './componentes/mostrar-partidos/mostrar-partidos.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AgregarComponent } from './componentes/agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarPuntajeComponent,
    MostrarPartidosComponent,
    AgregarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
