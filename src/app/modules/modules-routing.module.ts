import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        children: [
          { 
            path: "welcome",
            loadChildren: () => import("src/app/modules/welcome/welcome.module").then( m => m.WelcomeModule ) 
          },{ 
            path: "skills",
            loadChildren: () => import("src/app/modules/skills/skills.module").then( m => m.SkillsModule ) 
          },{ 
            path: "jobs",
            loadChildren: () => import("src/app/modules/jobs/jobs.module").then( m => m.JobsModule )
          },{ 
            path: "albums",
            loadChildren: () => import("src/app/modules/album/album.module").then( m => m.AlbumModule )
          },{ 
            path: "projects",
            loadChildren: () => import("src/app/modules/projects/projects.module").then( m => m.ProjectsModule )
          },{ 
            path: "auth",
            loadChildren: () => import("src/app/modules/auth/auth.module").then( m => m.AuthModule )
          },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
