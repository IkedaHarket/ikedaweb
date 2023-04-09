import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { authGuard } from 'src/app/core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path:"",
        component:WelcomePageComponent
      },
    ]
  },{
    path:"dashboard",
    canActivate:[authGuard],
    children:[
      { path:"", component: DashboardPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
