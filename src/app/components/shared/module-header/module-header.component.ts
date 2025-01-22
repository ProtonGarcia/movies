import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from 'src/app/core/services/data.service';

@Component({
    selector: 'app-module-header',
    templateUrl: './module-header.component.html',
    styleUrls: [],
    imports: [MatCardModule, MatIconModule, MatButtonModule]
})
export class ModuleHeaderComponent implements OnInit, AfterViewInit {
  @Input() title: string = 'sin nombre';
  @Input() subtitle: string = 'sin nombre';

  @Input() component: string = '';
  @Input() action: string = '';
  @Input() button: boolean = false;
  @Input() buttonLabel: string = 'sin nombre';
  @Input() buttonColor: string = 'primary';
  @Input() buttonAction: string = '';
  @Input() buttonIcon: any = null;

  constructor(private _data: DataService) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {}

  sendMessage() {
    this._data.sendMessage({
      from: 'ModuleHeaderComponent',
      component: this.component,
      action: this.action,
    });
  }

  cambiarValorButton(valor: boolean) {
    this.button = valor;
  }
}
