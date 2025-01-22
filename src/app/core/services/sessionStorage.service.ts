import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  public favoritos: number[] = [];

  constructor() {}

  public setData(indice: string, data: string) {
    sessionStorage.setItem(indice,data);
  }

  public getData(indice: string): string {
   return sessionStorage.getItem(indice) ?? '';
  }
}
