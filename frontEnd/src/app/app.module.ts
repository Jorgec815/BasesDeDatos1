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

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    BienvenidaComponent,
    EventoComponent,
    PrestamoComponent,
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
