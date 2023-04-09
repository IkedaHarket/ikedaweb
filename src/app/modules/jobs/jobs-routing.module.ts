import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { authGuard } from 'src/app/core/guards/auth/auth.guard';
import { JobsDashboardPageComponent } from './pages/jobs-dashboard-page/jobs-dashboard-page.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path:"",
        component: JobsPageComponent
      }
    ]
  },{
    path: "dashboard",
    canActivate: [authGuard],
    children:[
      { path: "", component: JobsDashboardPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
