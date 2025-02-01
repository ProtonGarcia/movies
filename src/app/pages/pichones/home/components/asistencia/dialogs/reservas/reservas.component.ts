import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Relacionados } from 'src/app/core/models/pichones/relacionados.model';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css',
  standalone: false,
})
export class ReservasComponent implements OnInit {
  public username: string = '';
  public espacios: number = 0;
  public relacionados: Relacionados[] = [];

  constructor(
    public dialogRef: MatDialogRef<ReservasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  async ngOnInit() {
    await this.loadControls();
  }

  async loadControls() {
    this.username = this.data.username ?? '';
    this.espacios = this.data.espacios ?? '';
    this.relacionados =
      this.data?.relacionados.length > 0
        ? this.data?.relacionados.filter(
            (item: Relacionados) => item.confirmado === true
          )
        : [];
  }
}
