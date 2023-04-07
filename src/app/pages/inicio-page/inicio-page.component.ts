import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  standalone: true,
  imports:[SharedModule],
  styleUrls: ['./inicio-page.component.scss']
})
export class InicioPageComponent {

}
