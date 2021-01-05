import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  loading: boolean;
  error: boolean;
  nodefinido = false;
  pelicula: any[] = [];
  constructor(private ps: PeliculasService,
              private router: ActivatedRoute,
              private rou: Router) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.buscar( params['termino'] );
      // this.getTopTracks( params['id'])
    });
  }

  buscar(termino: string){
    this.loading = true;
    if (termino === undefined) {
      this.loading = false;
      this.nodefinido = true;
      return;
    }
    this.ps.buscarPeli(termino)
    .subscribe( (data: any) => {
      this.pelicula = data['results'];
      this.loading = false;
    }, ( errorServicio ) => {
      this.loading = false;
      this.error = true;
      console.log(errorServicio);
      // this.mensajeError = errorServicio.error.errors;
    });
  }

  VerPelicula(id: string) {
    this.rou.navigate([ '/pelicula', id, 'buscar' ]);
  }
}
