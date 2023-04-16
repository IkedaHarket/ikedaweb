import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    redirectTo:"/welcome"
  },{
    path: "",
    loadChildren: () => import("src/app/modules/modules.module").then(m => m.ModulesModule),
  },
  {
    path:"**",
    pathMatch:'full',
    redirectTo:"/welcome"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
