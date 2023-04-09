import { Component } from '@angular/core';
import { JobsService } from '../../services/jobs/jobs.service';

@Component({
  selector: 'app-jobs-dashboard-page',
  templateUrl: './jobs-dashboard-page.component.html',
  styleUrls: ['./jobs-dashboard-page.component.scss']
})
export class JobsDashboardPageComponent {
  constructor(
    public readonly jobs: JobsService,
  ){}
}
