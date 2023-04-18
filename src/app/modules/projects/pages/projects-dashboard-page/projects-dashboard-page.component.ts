import { Component } from '@angular/core';
import { ProjectService } from '../../service/project/project.service';
import { Project } from '../../interfaces';

@Component({
  selector: 'app-projects-dashboard-page',
  templateUrl: './projects-dashboard-page.component.html',
  styleUrls: ['./projects-dashboard-page.component.scss']
})
export class ProjectsDashboardPageComponent {

  projectToEdit!: Project; 

  constructor(
    public readonly project: ProjectService,
  ){}

  setProjectToEdit(project: Project){
    this.projectToEdit = project;
  }
  
}
