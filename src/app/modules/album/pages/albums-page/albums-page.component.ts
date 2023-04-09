import { Component } from '@angular/core';
import { AlbumService } from '../../services/album/album.service';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent {

  constructor(
      public readonly album: AlbumService,
  ){}
}
