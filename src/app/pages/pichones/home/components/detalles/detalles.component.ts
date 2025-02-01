import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { PhotoService } from '../../../core/services/imageservice';
import { CountdownService } from '../../../core/services/dateService';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
  providers: [PhotoService],
  standalone: false,
})
export class DetallesComponent implements AfterViewInit, OnDestroy {
  public remainingTime: number[] = [];

  images: {
    itemImageSrc: string;
    thumbnailImageSrc: string;
    alt: string;
    title: string;
  }[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1300px',
      numVisible: 4,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];

  ngOnDestroy() {
    this.countdownService.stopCountdown();
  }

  constructor(
    private photoService: PhotoService,
    private countdownService: CountdownService
  ) {}
  async ngAfterViewInit() {
    await this.setImages();
  }

  async ngOnInit() {
    this.countdownService.startCountdown();
    this.countdownService.getRemainingTime().subscribe((time) => {
      this.remainingTime = time;
    });
  }

  public async setImages() {
    this.photoService.getImages().then((images) => {
      this.images = images.map((images: any) => {
        return {
          itemImageSrc: images.itemImageSrc,
          thumbnailImageSrc: images.thumbnailImageSrc,
          alt: images.alt,
          title: images.title,
        };
      });
    });
  }
}
