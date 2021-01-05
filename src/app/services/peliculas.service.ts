import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = '89a9cac4c31b5fb1b30ae9e90a380919';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apiKey }&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=2`;
    return this.http.get(url)
              .pipe( map( res => res['results']));
  }
  masPopulares() {
    const url = `${ this.urlMoviedb }/trending/movie/week?api_key=${ this.apiKey }`;
    return this.http.get(url)
              .pipe( map( res => res['results']));
  }

  verPelicula(id: string) {
    const url = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apiKey }`;
    return this.http.get(url)
              .pipe( map( res => res));
  }

  buscarPeli(termino: string) {
    const url = `${ this.urlMoviedb }/search/movie?api_key=${ this.apiKey }&language=es&query=${termino}&page=1&include_adult=false`;
    return this.http.get(url)
              .pipe( map( res => res));
  }
}
