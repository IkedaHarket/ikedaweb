import { Component } from '@angular/core';
import { SkillsService } from '../../services/skills/skills.service';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent {

  constructor(
    public readonly skills : SkillsService,
  ){}
}
