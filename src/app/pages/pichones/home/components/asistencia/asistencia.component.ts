import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { MultiSelectChangeEvent } from 'primeng/multiselect';
import { Subscription } from 'rxjs';
import { Relacionados } from 'src/app/core/models/pichones/relacionados.model';
import { ApiService } from 'src/app/core/services/api.service';
import { DataService } from 'src/app/core/services/data.service';
import { ReservasComponent } from './dialogs/reservas/reservas.component';
import { ConfirmacionComponent } from './dialogs/confirmacion/confirmacion.component';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css'],
  standalone: false,
})
export class AsistenciaComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() showAsistencia: boolean = false;

  accept: boolean | undefined = undefined;
  hidden = false;
  public showHeader: boolean = false;
  threshold = 10;
  previousScrollPosition = 0;
  public username: string = '';
  public confirmado: boolean | undefined = undefined;
  public relacionados: Relacionados[] = [];
  public allSelected: boolean = false;
  public checked: boolean = false;
  public subscribe!: Subscription;
  public selectedInvitados!: Relacionados[];
  public formGroup: FormGroup = new FormGroup({
    selectedInvitados: new FormControl([]),
    selectall: new FormControl(''),
  });
  responseData: any;

  constructor(
    private dataService: DataService,
    private apiService: ApiService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    @Optional() public dialogRef?: MatDialogRef<AsistenciaComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data?: any
  ) {
    this.username = this.data?.username;
    this.relacionados = this.data?.relacionados;
  }

  ngAfterViewInit(): void {
    this.showHeader = this.data?.showHeader ?? false;

    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscribe.remove;
  }

  ngOnInit() {
    this.subscribe = this.dataService.getData().subscribe((resp) => {
      if (resp.component == 'AsistenciaComponent' && resp.action == 'login') {
        this.responseData = resp;
        this.username = resp?.username ?? '';
        this.relacionados = resp.relacionados;
        this.confirmado = this.relacionados.some(
          (item) => item.confirmado === undefined
        )
          ? undefined
          : this.relacionados.some((item) => item.confirmado === true)
          ? true
          : false;

        this.accept = this.confirmado;

        this.loadForm();
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

  loadForm() {
    this.formGroup = new FormGroup({
      selectedInvitados: new FormControl<Relacionados[] | null>(
        this.relacionados.filter((item: Relacionados) => item.confirmado)
      ),
      selectall: new FormControl(
        this.relacionados.every((invitado) => invitado.confirmado === true)
      ),
    });
  }

  toggleAll(selectedAll: boolean) {
    this.relacionados.forEach((item: Relacionados) => {
      item.confirmado = selectedAll;
    });

    this.loadForm();
  }

  actualizarConfirmado($event: MultiSelectChangeEvent) {
    this.relacionados.forEach((usuario) => {
      usuario.confirmado = $event.value.some(
        (sel: any) => sel.username === usuario.username
      );
    });
  }

  changeView(value: boolean | undefined) {
    this.accept = value;
  }

  showConfirm(response: boolean) {
    const dialog = this.dialog.open(ConfirmacionComponent, {
      panelClass: 'custom-dialog-container',
      disableClose: true,
      data: {
        respuesta: response,
      },
    });

    dialog.afterClosed().subscribe((resp: boolean) => {
      if (resp) this.submit(response);
    });
  }

  submit(confirmado: boolean = false) {
    try {
      this.accept = confirmado;

      if (this.relacionados.length == 1) {
        this.relacionados[0].confirmado = confirmado;
      }

      if (!confirmado) {
        this.relacionados.map(
          (item: Relacionados) => (item.confirmado = false)
        );
      }

      this.loadForm();

      this.apiService
        .doRequest('invitados/actualizar', this.relacionados, 'post')
        .then((resp) => {})
        .catch((error) => {
          console.error(
            'ha ocurrido un error al actualizar la asistencia',
            error
          );
        });
    } catch (error) {
      console.error('submit', error);
    }
  }

  showReservas() {
    this.dialog.open(ReservasComponent, {
      panelClass: 'custom-dialog-container',
      disableClose: true,
      width: '90vw',
      data: {
        username: this.username,
        espacios: this.relacionados.length,
        relacionados: this.relacionados,
      },
    });
  }
}
