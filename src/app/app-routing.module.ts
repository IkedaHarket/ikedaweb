import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("src/app/pages/public/public-page.module").then(m => m.PublicPageModule),
  },
  {
    path: "auth",
    loadChildren: () => import("src/app/core/auth/auth.module").then( m => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
