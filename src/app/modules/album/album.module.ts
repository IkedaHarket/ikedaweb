import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { AlbumDashboardPageComponent } from './pages/album-dashboard-page/album-dashboard-page.component';
import { AlbumService } from './services/album/album.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AlbumsPageComponent,
    AlbumDashboardPageComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    SharedModule,
  ]
})
export class AlbumModule {
   
  constructor(
    private readonly album: AlbumService,
  ){
    this.loadAlbums();
  }

  loadAlbums(): void{
    this.album.getAlbums().subscribe();
  }
}
