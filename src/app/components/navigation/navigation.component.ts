import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    standalone: false
})
export class NavigationComponent {
  showFiller = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  public menuStatus: Boolean;
  clickEventSubscription!: Subscription;

  constructor(public _menuService: MenuService) {
    this.menuStatus = false;

    this.clickEventSubscription = this._menuService
      .getClickEvent()
      .subscribe((t) => {
        this.menu();
      });
  }

  ngOnInit(): void {}

  menu(close?: any) {
    if (close) {
      return this.sidenav.close();
    }

    this.menuStatus = !this.menuStatus;
    this.menuStatus ? this.sidenav.open() : this.sidenav.close();
    return;
  }

  reason = '';

  close(reason: string) {
    this.reason = reason;

    this.menuStatus = false;
    this.sidenav.close();
  }
}
