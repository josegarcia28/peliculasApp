import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent {
  pelicula: any = {};
  loading: boolean;

  constructor(private router: ActivatedRoute,
              private ps: PeliculasService,
              private locali: Location) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getPelicula( params['id'] );
      console.log(params);
      // this.getTopTracks( params['id'])
    });
  }

  getPelicula( id: string ) {
    this.loading = true;
    this.ps.verPelicula( id )
      .subscribe( movie => {
        this.pelicula = movie;
        console.log(movie);
        this.loading = false;
      });
  }

  regresar() {
    this.locali.back();
  }

}
