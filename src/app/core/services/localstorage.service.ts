import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  public favoritos: number[] = [];

  constructor() {}
  addFavorite(id: number | undefined) {

    if (id === undefined) {
      return;
    }

    const existingFavoritos = localStorage.getItem('favoritos');
    const parsedFavoritos = existingFavoritos
      ? JSON.parse(existingFavoritos)
      : [];

    const uniqueFavoritos = Array.from(new Set(parsedFavoritos));

    if (uniqueFavoritos.includes(id)) {
      const indexToRemove = uniqueFavoritos.indexOf(id);
      uniqueFavoritos.splice(indexToRemove, 1);
    } else {
      uniqueFavoritos.push(id);
    }

    localStorage.setItem('favoritos', JSON.stringify(uniqueFavoritos));
  }

  IdExist(id: number): boolean {
    const existingFavoritos = localStorage.getItem('favoritos');
    const parsedFavoritos = existingFavoritos
      ? JSON.parse(existingFavoritos)
      : [];

    return parsedFavoritos.includes(id.toString());
  }

  getFavoritos() {
    const existingFavoritos = localStorage.getItem('favoritos');
    const parsedFavoritos = existingFavoritos
      ? JSON.parse(existingFavoritos)
      : [];

    return parsedFavoritos;
  }
}
