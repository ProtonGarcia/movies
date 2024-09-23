import {
  AfterViewInit,
  Component,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Movie } from 'src/app/core/models/movie.interface';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-slider-galeria',
  templateUrl: './slider-galeria.component.html',
  styleUrls: ['./slider-galeria.component.css'],
})
export class SliderGaleriaComponent implements AfterViewInit, OnChanges {
  movies: any[] | undefined;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(private api: ApiService) {}
  ngAfterViewInit(): void {
    this.setCarousel();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('SliderGaleriaComponent', changes);
  }

  setCarousel() {
    this.api
      .doRequest('3/movie/now_playing', {}, 'get')
      .then((movies: any) => {
        this.movies = movies?.results.map((movie: Movie) => {
          return {
            original_title: movie?.original_title,
            overview: movie?.overview,
            backdrop_path:
              'https://image.tmdb.org/t/p/w500' + movie?.backdrop_path,
          };
        });
      })
      .catch((error) => {
        this.movies = [
          {
            original_title: 'sin datos',
            overview: 'sin datos',
            backdrop_path: '../../../assets/images/remove-file_11366800.png',
          },
        ];
      });
  }
}
