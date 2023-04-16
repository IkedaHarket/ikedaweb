import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { SkillDashboardPageComponent } from './pages/skill-dashboard-page/skill-dashboard-page.component';
import { SkillsService } from './services/skills/skills.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { PercentageCardComponent } from './components/percentage-card/percentage-card.component';
import { PercentageCardContainerComponent } from './components/percentage-card-container/percentage-card-container.component';
import { SkillInputCardComponent } from './components/skill-input-card/skill-input-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    SkillsPageComponent,
    SkillDashboardPageComponent,
    PercentageCardComponent,
    PercentageCardContainerComponent,
    SkillInputCardComponent,
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
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
