import { Component } from '@angular/core';
import { ProjectService } from '../../service/project/project.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {

  constructor(
    public readonly project: ProjectService,
  ){}

}
