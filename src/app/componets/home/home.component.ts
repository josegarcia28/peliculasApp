import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  masPopulares: any[] = [];
  getPopulares: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  constructor(public ps: PeliculasService,
              private router: Router) {

    this.error = false;
    this.loading = true;

    this.ps.getPopulares().subscribe( data => {
      this.getPopulares = data;
      this.loading = false;
      // console.log(this.getPopulares);
    }, ( errorServicio ) => {
      this.loading = false;
      this.error = true;
      console.log(errorServicio);
      this.mensajeError = errorServicio.error.error.message;
    });

    this.ps.masPopulares().subscribe( data => {
      this.masPopulares = data;
      this.loading = false;
      // console.log(this.masPopulares);
    }, ( errorServicio ) => {
      this.loading = false;
      this.error = true;
      console.log(errorServicio);
      this.mensajeError = errorServicio.error.error.message;
    });
  }

  VerPelicula( item: string){
    // console.log( item );
    this.router.navigate([ '/pelicula', item ]);
  }
}
