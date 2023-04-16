import { Component, Input } from '@angular/core';
import { SkillsService } from '../../services/skills/skills.service';

@Component({
  selector: 'app-percentage-card-container',
  templateUrl: './percentage-card-container.component.html',
  styleUrls: ['./percentage-card-container.component.scss']
})
export class PercentageCardContainerComponent {
  @Input('isAdminElement') isAdminElement : boolean = false;

  constructor(
    public readonly skill: SkillsService,
  ){

  }
}
