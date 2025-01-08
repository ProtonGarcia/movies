import { Injectable } from '@angular/core';
@Injectable()
export class PhotoService {
  getData() {
    return [
      {
        itemImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img1.png',
        thumbnailImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img1.png',
        alt: 'Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img2.png',
        thumbnailImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img2.png',
        alt: 'Image 2',
        title: 'Title 2',
      },
      {
        itemImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img3.png',
        thumbnailImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img3.png',
        alt: 'Image 3',
        title: 'Title 3',
      },
      {
        itemImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img4.png',
        thumbnailImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img4.png',
        alt: 'Image 4',
        title: 'Title 4',
      },
      {
        itemImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img5.png',
        thumbnailImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img5.png',
        alt: 'Image 5',
        title: 'Title 5',
      },
      {
        itemImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img6.png',
        thumbnailImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img6.png',
        alt: 'Image 6',
        title: 'Title 6',
      },
      {
        itemImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img7.png',
        thumbnailImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img7.png',
        alt: 'Image 7',
        title: 'Title 7',
      },
      {
        itemImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img8.png',
        thumbnailImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img8.png',
        alt: 'Image 8',
        title: 'Title 8',
      },
      {
        itemImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img9.png',
        thumbnailImageSrc:
          '../../../../../assets/images/pichones/detalles/galleria/img9.png',
        alt: 'Image 9',
        title: 'Title 9',
      },
    ];
  }
  getImages() {
    return Promise.resolve(this.getData());
  }
}
