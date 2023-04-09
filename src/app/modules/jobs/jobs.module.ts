import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './jobs-routing.module';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { JobsDashboardPageComponent } from './pages/jobs-dashboard-page/jobs-dashboard-page.component';
import { JobsService } from './services/jobs/jobs.service';


@NgModule({
  declarations: [
    JobsPageComponent,
    JobsDashboardPageComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ]
})
export class JobsModule { 
  constructor(
    private readonly jobs: JobsService,
  ){
    this.loadJobs();
  }

  loadJobs(): void{
    this.jobs.getJobs().subscribe();
  }
}
