import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FileService } from 'src/app/core/services';
import { ProjectService } from '../../service/project/project.service';
import { Project } from '../../interfaces';

type ProjectFormInputs = 'title' | 'description' | 'url' | 'image'

@Component({
  selector: 'app-new-project',
  templateUrl: './input-project.component.html',
  styleUrls: ['./input-project.component.scss']
})
export class InputProjectComponent {

  projectForm: FormGroup = this.fb.group({
    title: ['',[Validators.required]],
    description: [''],
    url: ['',[Validators.required]],
    image:['',[]],
  })
  
  constructor(
    private readonly fb: FormBuilder,
    private readonly file: FileService,
    private readonly project: ProjectService,
    public readonly dialogRef: MatDialogRef<InputProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public projectToEdit?: Project
    ){
      this.setInitialForm();
    }

  onFileChange(files: FileList): void {
    (this.file.onFileChange(files).length > 0) 
    ? this.projectForm.patchValue({ image: files[0] })
    : this.projectForm.get<ProjectFormInputs>('image')?.setValue(null)
  }
  
  async save(): Promise<void>{
      if(this.projectForm.invalid) return;

      if(this.projectToEdit){

        if(this.projectForm.get<ProjectFormInputs>('image')?.value !== ''){
          await this.file.deleteFile( this.project.fileBy, this.file.getNameFileByUrl(this.projectToEdit.image) )
        }else{
          this.project.editproject(this.projectToEdit.id,{...this.projectForm.value, image: this.projectToEdit.image}).subscribe(() => {
            this.dialogRef.close()
          })
          return;
        }

        const resp = await this.file.postFile(this.project.fileBy, this.projectForm.get<ProjectFormInputs>('image')?.value)
        if(!Object.keys(resp).includes('url')) return

        this.project.editproject(this.projectToEdit.id,{ ...this.projectForm.value, image: (resp as any).url }).subscribe(() => {
          this.dialogRef.close()
        })

      }else{
        console.log(222)
        const resp = await this.file.postFile(this.project.fileBy, this.projectForm.get<ProjectFormInputs>('image')?.value)
        if(!Object.keys(resp).includes('url')) return
  
        this.project.postProject({ ...this.projectForm.value, image: (resp as any).url }).subscribe(() => {
          this.dialogRef.close()
        })

      }
  }

  setInitialForm(): void{
    if(this.projectToEdit){
      this.projectForm.get<ProjectFormInputs>('title')?.setValue(this.projectToEdit.title)
      this.projectForm.get<ProjectFormInputs>('description')?.setValue(this.projectToEdit?.description)
      this.projectForm.get<ProjectFormInputs>('url')?.setValue(this.projectToEdit.url)
      // this.projectForm.get<ProjectFormInputs>('image')?.setValue(this.projectToEdit.image)
    }else{
      this.projectForm.get<ProjectFormInputs>('title')?.setValue('')
      this.projectForm.get<ProjectFormInputs>('description')?.setValue('')
      this.projectForm.get<ProjectFormInputs>('url')?.setValue('')
      this.projectForm.get<ProjectFormInputs>('image')?.setValue('')
    }
  }

}
