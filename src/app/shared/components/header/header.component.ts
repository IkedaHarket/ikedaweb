import { Component } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    public menuService: MenuService,
  ){}
}