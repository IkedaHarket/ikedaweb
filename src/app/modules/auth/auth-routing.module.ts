import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard, noAuthGuard } from 'src/app/core/guards/auth/auth.guard';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: AuthPageComponent,
    canActivate:[noAuthGuard],
    children:[
      { path: "login", component:LoginComponent },
      { path:"**", redirectTo:"login" }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
