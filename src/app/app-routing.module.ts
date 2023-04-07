import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("src/app/core/auth/auth.module").then( m => m.AuthModule),
  },
  {
    path: "inicio",
    loadComponent: () => import("src/app/pages/inicio-page/inicio-page.component").then(c => c.InicioPageComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
