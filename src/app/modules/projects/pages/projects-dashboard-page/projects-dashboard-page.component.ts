import { Component } from '@angular/core';
import { ProjectService } from '../../service/project/project.service';

@Component({
  selector: 'app-projects-dashboard-page',
  templateUrl: './projects-dashboard-page.component.html',
  styleUrls: ['./projects-dashboard-page.component.scss']
})
export class ProjectsDashboardPageComponent {
  constructor(
    public readonly project: ProjectService,
  ){}
}
