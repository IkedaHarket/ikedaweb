import { Component } from '@angular/core';
import { MenuDashboardService } from 'src/app/core/services/menu-dashboard/menu-dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  
  constructor(
    public readonly menu: MenuDashboardService,
  ){}

}
