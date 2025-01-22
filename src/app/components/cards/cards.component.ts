import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css'],
    standalone: false
})
export class CardsComponent {
  @Input() imageSource: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
