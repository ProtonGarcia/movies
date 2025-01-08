import { Component } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-home-pichones',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private themeService: ThemeService){
    this.themeService.changeTheme('pichones')
  }

  ngOnInit() {}


}
