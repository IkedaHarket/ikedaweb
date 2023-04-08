import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-page-routing.module';
import { AlbumPageComponent } from './album-page/album-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { InicioPageComponent } from './inicio-page/inicio-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { SkillPageComponent } from './skill-page/skill-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AlbumPageComponent,
    ExperiencePageComponent,
    InicioPageComponent,
    ProjectsPageComponent,
    SkillPageComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicPageModule { }
