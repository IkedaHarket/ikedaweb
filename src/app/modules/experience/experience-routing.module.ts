import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path:"",
        component: ExperiencePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
