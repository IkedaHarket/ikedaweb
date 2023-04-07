import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: "",
    component: AuthPageComponent,
    children:[
      { path: "login", component:LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
