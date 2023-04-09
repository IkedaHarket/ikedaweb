import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { authGuard } from 'src/app/core/guards/auth/auth.guard';
import { ProjectsDashboardPageComponent } from './pages/projects-dashboard-page/projects-dashboard-page.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path:"",
        component: ProjectsPageComponent
      }
    ]
  },
  {
    path:"dashboard",
    canActivate:[authGuard],
    children:[
      {
        path:"",
        component: ProjectsDashboardPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
