import { Pipe, PipeTransform } from '@angular/core';

interface algo {
  poster_path: string;
}

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images: algo, tamano: number): any {
    const url = `https://image.tmdb.org/t/p/w${tamano}`;
    if (!images.poster_path) {
      return 'assets/img/noimage.png';
    }
    return url + images.poster_path;
  }

}
