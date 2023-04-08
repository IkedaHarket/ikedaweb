import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path:"",
        component: AlbumsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
