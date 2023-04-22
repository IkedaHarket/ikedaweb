import { Component } from '@angular/core';
import { ProjectService } from '../../service/project/project.service';
import { MatDialog } from '@angular/material/dialog';
import { InputProjectComponent } from '../../components/input-project/input-project.component';
import { Project } from '../../interfaces';
import { FileService } from 'src/app/core/services';

@Component({
  selector: 'app-projects-dashboard-page',
  templateUrl: './projects-dashboard-page.component.html',
  styleUrls: ['./projects-dashboard-page.component.scss']
})
export class ProjectsDashboardPageComponent {

  constructor(
    private readonly file: FileService,
    public readonly project: ProjectService,
    public readonly dialog: MatDialog,
  ){}

  openNewProjectForm(){
    this.dialog.closeAll();
    this.dialog.open(InputProjectComponent)
  }
  
  editProject(project:Project){
    this.dialog.closeAll();
    this.dialog.open(InputProjectComponent,{data: project})
  }

  async deleteProject(project:Project){
    await this.file.deleteFile(this.project.fileBy,this.file.getNameFileByUrl(project.image))
    this.project.deleteProject(project.id).subscribe()
  }
}
