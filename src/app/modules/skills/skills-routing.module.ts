import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { SkillDashboardPageComponent } from './pages/skill-dashboard-page/skill-dashboard-page.component';
import { authGuard } from 'src/app/core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path:"",
        component: SkillsPageComponent
      }
    ]
  },
  {
    path:"dashboard",
    canActivate:[authGuard],
    children:[
      {
        path:"",
        component: SkillDashboardPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
