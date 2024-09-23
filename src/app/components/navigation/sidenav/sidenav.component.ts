import { Component, DoCheck, OnDestroy, ViewChild } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
} from '@angular/material/tree';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/core/services/menu.service';
import { UtilService } from 'src/app/core/services/util.service';

interface FoodNode {
  name: string;
  url?: string;
  icon?: string;
  children?: FoodNode[];
}

interface CategoryNode {
  category: string;
  menu?: MenuNode[];
}

interface MenuNode extends CategoryNode {
  nameMenu?: string;
  slugMenu?: string;
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  url?: string;
  level: number;
  nameMenu?: string;
  slugMenu?: string;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Home',
    url: 'cine',
    icon: 'none',
  },
  {
    name: 'Free to me',
    url: 'pronto',
    icon: 'none',
  },
  {
    name: 'Store',
    url: 'popular',
    icon: 'none',
  },
  {
    name: 'Free to me',
    url: 'top',
    icon: 'none',
  },
  {
    name: 'Settings',
    url: '',
    icon: 'settings',
  },
  {
    name: 'Notifications',
    url: '',
    icon: 'notifications_none',
  },
];
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  selectedOption: HTMLElement | null = null;

  constructor(public _menuService: MenuService, private utils: UtilService) {
    this.dataSource.data = TREE_DATA;

    _menuService.getClickEvent().subscribe((resp: any) => {
      this.treeControl.collapseAll();
    });
  }

  setSelectedClass(element: any) {
    if (this.selectedOption) {
      this.selectedOption.classList.remove('selected-option');
    }

    this.selectedOption = element.target as HTMLElement;
    this.selectedOption.classList.add('selected-option');
  }

  goto(node: any) {
    // this.loadingService.show();

    // this.loadingService.hide();
    this.utils.goToPage(node);
    this._menuService.closeMenu();
  }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      url: node.url || '',
      icon: node.icon || 'done_outline',
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener<FoodNode, ExampleFlatNode>(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
