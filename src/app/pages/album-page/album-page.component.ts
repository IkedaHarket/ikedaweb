import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  standalone:true,
  imports: [SharedModule],
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent {

}
