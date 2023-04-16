import { Component, Input } from '@angular/core';
import { Skill } from '../../interfaces';

@Component({
  selector: 'app-percentage-card',
  templateUrl: './percentage-card.component.html',
  styleUrls: ['./percentage-card.component.scss']
})
export class PercentageCardComponent {
  @Input('skill') skill !: Skill;
  @Input('isAdminElement') isAdminElement : boolean = false;

  editMode: boolean = false;
  
  toggleEditMode(){
    this.editMode = !this.editMode
  }

}
