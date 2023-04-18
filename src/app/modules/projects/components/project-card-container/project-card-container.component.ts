import { Component } from '@angular/core';
import { ProjectService } from '../../service/project/project.service';

@Component({
  selector: 'app-project-card-container',
  templateUrl: './project-card-container.component.html',
  styleUrls: ['./project-card-container.component.scss']
})
export class ProjectCardContainerComponent {

  constructor(
    public readonly project: ProjectService,
    ) {}
}
