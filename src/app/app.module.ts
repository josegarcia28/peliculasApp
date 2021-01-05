import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { HomeComponent } from './componets/home/home.component';
import { PeliculaComponent } from './componets/pelicula/pelicula.component';
import { BusquedaComponent } from './componets/busqueda/busqueda.component';
import { TarjetaComponent } from './componets/tarjeta/tarjeta.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CargandoComponent } from './componets/shared/cargando/cargando.component';
import { SinregComponent } from './componets/shared/sinreg/sinreg.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliculaComponent,
    BusquedaComponent,
    TarjetaComponent,
    NoimagePipe,
    CargandoComponent,
    SinregComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
