import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservasComponent } from '../reservas/reservas.component';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrl: './confirmacion.component.css',
  standalone: false,
})
export class ConfirmacionComponent implements OnInit {
  public response: boolean = false;
  public message: { header: string; body: string; button: string } = {
    header: '',
    body: '',
    button: '',
  };

  constructor(
    public dialogRef: MatDialogRef<ReservasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  async ngOnInit() {
    await this.buildMessage(this.data?.respuesta);
  }

  async buildMessage(response: boolean) {
    this.message = response
      ? {
          header: 'Confirmar asistencia',
          body: 'Al confirmar, estarás aceptando tu presencia a la boda. ¿Estás seguro de continuar?',
          button: 'Si, asistire',
        }
      : {
          header: 'No podré asistir',
          body: 'Al confirmar, estarás aceptando tu ausencia a la boda. ¿Estás seguro de continuar?',
          button: 'No asistiré',
        };
  }

  async confirmar(resp: boolean) {
    this.dialogRef.close(resp);
  }
}
