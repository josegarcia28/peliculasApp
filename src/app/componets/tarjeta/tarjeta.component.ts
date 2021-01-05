import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() items: any[] = [];

  constructor( private router: Router) {

  }

  VerPelicula( item: string){
    // console.log( item );
    this.router.navigate([ '/pelicula', item, 'home' ]);
  }

}
