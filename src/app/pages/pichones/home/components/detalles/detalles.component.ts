import { AfterViewInit, Component } from '@angular/core';
import { PhotoService } from '../../../core/services/imageservice';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
  providers: [PhotoService],
})
export class DetallesComponent implements AfterViewInit {
  images: {
    itemImageSrc: string;
    thumbnailImageSrc: string;
    alt: string;
    title: string;
  }[] = [];

  responsiveOptions: any[] = [
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
];

constructor(private photoService: PhotoService) {}
  async ngAfterViewInit() {
    await this.setImages()

  }


  async ngOnInit() {
  }

  public async setImages(){

    this.photoService.getImages().then((images) => {
      this.images = images.map((images: any) => {
        console.log(images);
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
