import { Component, Input } from '@angular/core';

type Weight = '100' | '500' | '250';

@Component({
  selector: 'app-maple-leaf',
  templateUrl: './maple-leaf.component.html',
  styleUrls: ['./maple-leaf.component.scss']
})
export class MapleLeafComponent {
  @Input('weight') weight: Weight = '100';
}
