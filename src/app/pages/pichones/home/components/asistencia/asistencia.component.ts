import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MultiSelectChangeEvent } from 'primeng/multiselect';
import { Subscription } from 'rxjs';
import { Relacionados } from 'src/app/core/models/pichones/relacionados.model';
import { ApiService } from 'src/app/core/services/api.service';
import { DataService } from 'src/app/core/services/data.service';
import { SessionStorageService } from 'src/app/core/services/sessionStorage.service';
import { ReservasComponent } from './dialogs/reservas/reservas.component';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css'],
  standalone: false,
})
export class AsistenciaComponent implements OnInit, OnDestroy {
  accept: boolean | undefined = undefined;
  hidden = false;
  threshold = 10;
  previousScrollPosition = 0;
  public username: string = '';
  public relacionados: Relacionados[] = [];
  public allSelected: boolean = false;
  public checked: boolean = false;
  public subscribe!: Subscription;
  public selectedInvitados!: Relacionados[];

  constructor(
    private dataService: DataService,
    private apiService: ApiService,
    public dialog: MatDialog
  ) {}

  ngOnDestroy(): void {
    this.subscribe.remove;
  }

  ngOnInit() {
    this.subscribe = this.dataService.getData().subscribe((resp) => {
      if (resp.component == 'AsistenciaComponent' && resp.action == 'login') {
        this.username = resp.username ?? '';
        this.relacionados = resp.relacionados;
        console.log('data', this.relacionados);
      }
    });
  }

  confirm() {
    setTimeout(() => {
      this.scrollToItem();
    }, 100);
  }

  scrollToItem(): void {
    const element = document.getElementById(`bottom`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleAll(selectedAll: boolean) {
    this.allSelected = !selectedAll;
    console.log('toggle all', this.allSelected);

    if (this.allSelected) {
      this.checked = true;
      this.selectedInvitados = [...this.relacionados];
    } else {
      this.selectedInvitados = [];
      this.checked = false;
    }
    this.relacionados.forEach((item: Relacionados) => {
      item.confirmado = this.checked;
    });
  }

  actualizarConfirmado($event: MultiSelectChangeEvent) {
    console.log('actualizarConfirmado', $event);
    this.relacionados.forEach((usuario) => {
      // Si el usuario está en la lista seleccionada, se marca como confirmado
      usuario.confirmado = $event.value.some(
        (sel: any) => sel.username === usuario.username
      );
    });
  }

  changeView(value: boolean | undefined) {
    this.accept = value;
  }

  submit(confirmado: boolean = false) {
    try {
      this.accept = confirmado;

      if (this.relacionados.length == 1) {
        this.relacionados[0].confirmado = confirmado;
      }

      this.apiService
        .doRequest('invitados/actualizar', this.relacionados, 'post')
        .then((resp) => {
          console.log('actualizando invitados...', resp);
        })
        .catch((error) => {
          console.error(
            'ha ocurrido un error al actualizar la asistencia',
            error
          );
        });

      // console.log(this.relacionados);
    } catch (error) {
      console.error('submit', error);
    }
  }

  showReservas() {
    this.dialog.open(ReservasComponent, {
      
      panelClass: 'custom-dialog-container',
      disableClose: true
    });
  }
}
