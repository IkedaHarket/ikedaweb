import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './inicio-page/inicio-page.component';
import { SkillPageComponent } from './skill-page/skill-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "inicio", component: InicioPageComponent },
      { path: "skills", component: SkillPageComponent },
      { path: "experience", component: ExperiencePageComponent },
      { path: "albums", component: AlbumPageComponent },
      { path: "projects", component: ProjectsPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
