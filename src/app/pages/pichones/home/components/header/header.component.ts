import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Relacionados } from 'src/app/core/models/pichones/relacionados.model';
import { DataService } from 'src/app/core/services/data.service';
import { AsistenciaComponent } from '../asistencia/asistencia.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false,
})
export class HeaderComponent {
  public subscribe!: Subscription;
  public hidden: boolean = true;
  public label: string = 'Confirmar Asistencia';

  constructor(private dataService: DataService, public dialog: MatDialog) {}

  ngOnDestroy(): void {
    this.subscribe.remove;
  }

  ngOnInit() {
    this.subscribe = this.dataService.getData().subscribe((resp) => {
      if (resp.component == 'AsistenciaComponent' && resp.action == 'login') {

        this.label = resp.relacionados.some(
          (item: Relacionados) => item.confirmado != undefined
        )
          ? 'Modificar Asistencia'
          : 'Confirmar Asistencia';
        this.hidden = false;
      }

      this.showReservas(resp);
    });
  }

  scrollToItem(): void {
    const element = document.getElementById(`bottom`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  showReservas(data: any) {
    if (
      data?.relacionados.some(
        (item: Relacionados) => item.confirmado === undefined
      )
    ) {
      this.dialog.open(AsistenciaComponent, {
        panelClass: 'asistencia-dialog',
        height: '100vh',
        width: '100vw',
        disableClose: true,
        data: {
          username: data.username,
          espacios: data.relacionados.length,
          relacionados: data.relacionados,
          showHeader: true,
        },
      });
    }
  }
}
