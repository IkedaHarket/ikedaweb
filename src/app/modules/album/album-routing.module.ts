import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { authGuard } from 'src/app/core/guards/auth/auth.guard';
import { AlbumDashboardPageComponent } from './pages/album-dashboard-page/album-dashboard-page.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path:"",
        component: AlbumsPageComponent
      }
    ], 
  },
  {
    path:"dashboard",
    canActivate:[authGuard],
    children:[
      {
        path:"",
        component: AlbumDashboardPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
