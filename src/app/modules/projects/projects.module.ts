import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectsDashboardPageComponent } from './pages/projects-dashboard-page/projects-dashboard-page.component';
import { ProjectService } from './service/project/project.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectCardContainerComponent } from './components/project-card-container/project-card-container.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectsDashboardPageComponent,
    ProjectCardComponent,
    ProjectCardContainerComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ProjectsModule { 
  
  constructor(
    private readonly project: ProjectService,
  ){
    this.loadProjects();
  }

  loadProjects(): void{
    this.project.getProjects().subscribe()
  }
}
