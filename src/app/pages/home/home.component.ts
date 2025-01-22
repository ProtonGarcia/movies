import { Component } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.interface';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent {
  
  movies: Movie[] = [];

  carousel: any[] = [
    { name: 'En Cines', datasource: '3/movie/now_playing', ancla: 'cine' },
    { name: 'En Cines', datasource: '3/movie/upcoming', ancla: 'pronto' },
    { name: 'En Cines', datasource: '3/movie/popular', ancla: 'popular' },
    { name: 'En Cines', datasource: '3/movie/top_rated', ancla: 'top' },
  ];

  responsiveOptions!: any[];

  constructor() {}

  ngOnInit() {}
}
