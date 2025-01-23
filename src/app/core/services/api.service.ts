import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { DataService } from './data.service';
import { ErrorComponent } from 'src/app/components/dialogs/error/error.component';
import { MatDialog } from '@angular/material/dialog';
import { SessionStorageService } from './sessionStorage.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api: string = '';
  private api_key: string = '';
  private languaje: string = '';
  clicked: boolean = false;
  private auth: string = '';

  constructor(
    private http: HttpClient,
    private data: DataService,
    public dialog: MatDialog,
    private session: SessionStorageService
  ) {
    this.api = environment.apiServer;
    this.auth = environment.apiAuth;
    this.api_key = environment.api_key;
    this.languaje = environment.language;
  }

  doRequest(url: string, data: any, type: string) {
    const uri = this.api + environment.apiVersion + url;
    return new Promise((resolve) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.session.getData('token'),
      });

      switch (type) {
        case 'post':
          this.data.subscription = this.http
            .post<any>(uri, data, { headers })
            .subscribe(
              (response) => {
                return resolve(response);
              },
              (error) => {
                return resolve(error);
              }
            );
          break;
        case 'get':
          this.data.subscription = this.http
            .get<any>(uri, { headers })
            .subscribe(
              (response) => {
                return resolve(response);
              },
              (error) => {
                if (error.status === 0) {
                  console.log('No hay internet');

                  if (this.clicked == false) {
                    this.showDialog();
                    this.clicked = true;
                  }
                }
                return resolve(error);
              }
            );
          break;
        case 'delete':
          this.data.subscription = this.http
            .delete<any>(uri, { headers })
            .subscribe(
              (response) => {
                return resolve(response);
              },
              (error) => {
                return resolve(error);
              }
            );
          break;
        case 'put':
          this.data.subscription = this.http
            .put<any>(uri, data, { headers })
            .subscribe(
              (response) => {
                return resolve(response);
              },
              (error) => {
                return resolve(error);
              }
            );
          break;
      }
    });
  }

  login(uri: string) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      return this.http
        .get<any>(this.api + this.auth + uri, { headers })
        .subscribe(
          (response) => {
            return resolve(response);
          },
          (error) => {
            return reject(error);
          }
        );
    });
  }

  showDialog() {
    if (!this.clicked) {
      const clickedDialog = this.dialog.open(ErrorComponent);

      clickedDialog.afterClosed().subscribe(() => {
        this.clicked = true;
      });
    }
  }
}
