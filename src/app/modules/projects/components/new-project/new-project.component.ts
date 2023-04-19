import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FileService } from 'src/app/core/services';
import { ProjectService } from '../../service/project/project.service';

type ProjectFormInputs = 'title' | 'description' | 'url' | 'image'

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent {

  projectForm: FormGroup = this.fb.group({
    title: ['',[Validators.required]],
    description: [''],
    url: ['',[Validators.required]],
    image:['',[]],
  })
  
  constructor(
    private readonly fb: FormBuilder,
    private file: FileService,
    private project: ProjectService,
    public dialogRef: MatDialogRef<NewProjectComponent>,
    ){}

  onFileChange(files: FileList): void {
    (this.file.onFileChange(files).length > 0) 
    ? this.projectForm.patchValue({ image: files[0] })
    : this.projectForm.get<ProjectFormInputs>('image')?.setValue(null)
  }
  
  async save(){
      if(this.projectForm.invalid) return;
      const resp = await this.file.postFile('web-pages', this.projectForm.get<ProjectFormInputs>('image')?.value)
      if(!Object.keys(resp).includes('url')) return

      this.project.postProject({ ...this.projectForm.value, image: (resp as any).url }).subscribe(() => {
        this.dialogRef.close()
      })
  }
}
