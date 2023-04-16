import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from '../../validators/form-validators';
import { environment } from 'src/environments/environment';
import { SkillsService } from '../../services/skills/skills.service';
import { Skill } from '../../interfaces';

type SkillForm= 'percentage' | 'title' | 'color' | 'description';

@Component({
  selector: 'app-skill-input-card',
  templateUrl: './skill-input-card.component.html',
  styleUrls: ['./skill-input-card.component.scss']
})
export class SkillInputCardComponent implements OnInit{

  @ViewChild('coverAddButton') coverAddButton!: ElementRef<HTMLElement>
  @Input('skillToEdit') skillToEdit?: Skill;
  @Output() exitEditMode = new EventEmitter<boolean>()

  skillForm: FormGroup = this.fb.group({
    percentage  : [ 0 ,[Validators.required, Validators.max(100), Validators.min(0), Validators.maxLength(2)]],
    title       : ['' ,[Validators.required]],
    color       : [ environment.primaryColor,[Validators.required]],
    description : ['']
  },{
    validators:[
      this.formValidator.percentage<SkillForm>('percentage')
    ]
  } )

  constructor(
    private readonly fb: FormBuilder,
    private readonly formValidator: FormValidators,
    private readonly skill: SkillsService,
  ){}

  ngOnInit(): void {
    this.turnInitialState();
  }

  changeColor(color:string): void{
    this.skillForm.get('color')?.setValue(color);
  }

  getFieldValue(field:SkillForm): any {
    return this.skillForm.get(field)?.value;
  }

  handlerClickCoverAddButton(): void{
    this.coverAddButton.nativeElement.classList.add('active');
  }
  
  save(){
    if(this.skillForm.invalid) return
    this.skill.postSkill(this.skillForm.value).subscribe(()=>{
      this.turnInitialState()
    })
  }

  remove(){
    this.turnInitialState()
    this.skill.deleteSkill(this.skillToEdit!.id).subscribe()
  }

  turnInitialState(){
    if(this.skillToEdit){
      this.skillForm.get('color')?.setValue(this.skillToEdit.color)
      this.skillForm.get('percentage')?.setValue(this.skillToEdit.percentage)
      this.skillForm.get('title')?.setValue(this.skillToEdit.title)
      this.coverAddButton?.nativeElement.classList.remove('active');
    }else{
      this.skillForm.get('color')?.setValue(environment.primaryColor)
      this.skillForm.get('percentage')?.setValue(0)
      this.skillForm.get('title')?.setValue('')
      this.coverAddButton?.nativeElement.classList.remove('active');
    }
    
  }

}
