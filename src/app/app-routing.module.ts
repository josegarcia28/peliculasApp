import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { PeliculaComponent } from './componets/pelicula/pelicula.component';
import { BusquedaComponent } from './componets/busqueda/busqueda.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pelicula/:id/:pag', component: PeliculaComponent },
  { path: 'buscar', component: BusquedaComponent },
  { path: 'buscar/:termino', component: BusquedaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
   ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
