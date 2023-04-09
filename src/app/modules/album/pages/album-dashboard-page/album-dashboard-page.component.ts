import { Component } from '@angular/core';
import { AlbumService } from '../../services/album/album.service';

@Component({
  selector: 'app-album-dashboard-page',
  templateUrl: './album-dashboard-page.component.html',
  styleUrls: ['./album-dashboard-page.component.scss']
})
export class AlbumDashboardPageComponent {
  
  constructor(
    public readonly album: AlbumService,
  ){}

}
