import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private router: Router) {}

  get getAppName() {
    return environment.name;
  }

  goToPage(page: string, parent: boolean = true, data: any = {}) {
    if (parent) {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['pages/' + page], data);
    } else {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([page, data]).then((res: any) => {});
    }
  }
}
