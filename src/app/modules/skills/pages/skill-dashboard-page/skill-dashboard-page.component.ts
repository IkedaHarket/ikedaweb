import { Component } from '@angular/core';
import { SkillsService } from '../../services/skills/skills.service';

@Component({
  selector: 'app-skill-dashboard-page',
  templateUrl: './skill-dashboard-page.component.html',
  styleUrls: ['./skill-dashboard-page.component.scss']
})
export class SkillDashboardPageComponent {

  constructor(
    public readonly skills: SkillsService,
  ){}
  
  
}
