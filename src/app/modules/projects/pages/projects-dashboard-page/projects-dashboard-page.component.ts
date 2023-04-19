import { Component } from '@angular/core';
import { ProjectService } from '../../service/project/project.service';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectComponent } from '../../components/new-project/new-project.component';

@Component({
  selector: 'app-projects-dashboard-page',
  templateUrl: './projects-dashboard-page.component.html',
  styleUrls: ['./projects-dashboard-page.component.scss']
})
export class ProjectsDashboardPageComponent {

  constructor(
    public readonly project: ProjectService,
    public readonly dialog: MatDialog,
  ){}

  openNewProjectForm(){
    this.dialog.closeAll();
    this.dialog.open(NewProjectComponent)
  }
  
  deleteProject(idProject:string){
    
  }
}
