import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Relacionados } from 'src/app/core/models/pichones/relacionados.model';
import { DataService } from 'src/app/core/services/data.service';
import { SessionStorageService } from 'src/app/core/services/sessionStorage.service';

interface City {
  name: string,
  code: string
}
@Component({
    selector: 'app-asistencia',
    templateUrl: './asistencia.component.html',
    styleUrls: ['./asistencia.component.css'],
    standalone: false
})
export class AsistenciaComponent implements OnInit, OnDestroy {
  active: boolean = false;
  hidden = false;
  threshold = 10;
  previousScrollPosition = 0;
  public username: string = '';
  public relacionados: Relacionados[] = [];

  public subscribe!: Subscription;

  cities!: City[];

  selectedCities!: City[];
  

  constructor(
    private sessionStorage: SessionStorageService,
    private dataService: DataService
  ) {}

  ngOnDestroy(): void {
    this.subscribe.remove;
    
  }

  ngOnInit() {
    this.username = this.sessionStorage.getData('username') ?? '';

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

    this.subscribe = this.dataService.getData().subscribe((resp) => {
      if (resp.component == 'AsistenciaComponent' && resp.action == 'login') {
        console.log('data', resp);

        this.relacionados = resp.relacionados;
      }
    });
  }

  confirm() {
    this.active = true;
    setTimeout(() => {
      this.scrollToItem();
    }, 100);
  }

  scrollToItem(): void {
    const element = document.getElementById(`bottom`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
