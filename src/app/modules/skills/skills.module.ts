import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { SkillDashboardPageComponent } from './pages/skill-dashboard-page/skill-dashboard-page.component';
import { SkillsService } from './services/skills/skills.service';


@NgModule({
  declarations: [
    SkillsPageComponent,
    SkillDashboardPageComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    
  ]
})
export class SkillsModule { 
  constructor(
    private readonly skills: SkillsService,
  ){
    this.loadSkills();
  }
  loadSkills(): void{
    this.skills.getSkills().subscribe()
  }
}
