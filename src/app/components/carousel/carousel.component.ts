import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Movie } from 'src/app/core/models/movie.interface';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() title: string = '';
  @Input() dataSource: string = '';
  @Input() idAncla: string = '';
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateCarouselOptions();
  }

  carouselOptions: any = {
    numVisible: 4,
    numScroll: 4,
  };
  responsiveOptions: any[] = [
    {
      breakpoint: '1600px',
      numVisible: 4,
      numScroll: 4,
    },
    {
      breakpoint: '1400px',
      numVisible: 4,
      numScroll: 4,
    },
    {
      breakpoint: '1200px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '992px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '576px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '0px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  data: any;

  constructor(private api: ApiService) {}

  ngAfterViewInit(): void {
    this.setCarousel(this.dataSource);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes['data']?.currentValue;
  }

  updateCarouselOptions() {
    const width = window.innerWidth;
    for (const option of this.responsiveOptions) {
      const breakpoint = parseInt(option.breakpoint, 10);
      if (width >= breakpoint) {
        this.carouselOptions = {
          numVisible: option.numVisible,
          numScroll: option.numScroll,
        };
        break;
      }
    }
  }

  setCarousel(uri: string = '') {
    this.api
      .doRequest(uri, {}, 'get')
      .then((movies: any) => {
        this.data = movies?.results.map((movie: Movie) => {
          return {
            original_title: movie?.original_title,
            overview: movie?.overview,
            backdrop_path:
              'https://image.tmdb.org/t/p/w500' + movie?.backdrop_path,
          };
        });
      })
      .catch((error) => {
        this.data = [
          {
            original_title: 'sin datos',
            overview: 'sin datos',
            backdrop_path: '../../../assets/images/remove-file_11366800.png',
          },
        ];
      });
  }
}
