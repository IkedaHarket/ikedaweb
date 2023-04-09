import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationPageComponent } from './pages/configuration-page/configuration-page.component';
import { authGuard } from 'src/app/core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path:"configuration",
    canActivate:[authGuard],
    children:[
      {
        path:"dashboard",
        component: ConfigurationPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
