import { Component } from '@angular/core';
import { JobsService } from '../../services/jobs/jobs.service';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.scss']
})
export class JobsPageComponent {

  constructor(
    public readonly jobs: JobsService,
  ){}

}
