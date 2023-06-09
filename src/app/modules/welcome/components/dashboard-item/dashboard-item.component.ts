import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/core/interfaces';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent {
  @Input('item') item?: MenuItem;
}
