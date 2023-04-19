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
import { NewProjectComponent } from './components/new-project/new-project.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectsDashboardPageComponent,
    ProjectCardComponent,
    ProjectCardContainerComponent,
    NewProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
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
