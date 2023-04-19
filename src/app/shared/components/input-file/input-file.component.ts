import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subscription, filter } from 'rxjs';
import { FileService } from 'src/app/core/services';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent {
  @ViewChild('inputFile') inputFile!: ElementRef<HTMLElement>;
  @Output('files') files = new EventEmitter<FileList>();

  @Input('label') label: string = 'Subir Archivo';
  @Input('accept') accept: string = '.jpg,.png,.jpeg';
  @Input('multiple') multiple: boolean = false;

  preparedFiles?: FileList;

  clearInputFile$!: Subscription;

  constructor(private fileUploadService: FileService){}

  handlerClick() {
    this.inputFile.nativeElement.click();
  }

  changeInputFile(event: any) {
    event.preventDefault();
    this.preparedFiles = event.target.files as FileList;
    this.files.emit(this.preparedFiles);
  }

  ngOnInit(): void {
    this.clearInputFile$ = this.fileUploadService.clearInputFile$.pipe(filter( c => c))
      .subscribe(()=>{
        if(this.inputFile?.nativeElement) {
          (this.inputFile.nativeElement as any).value = ''
        }
    })
  }

  ngOnDestroy(): void {
    this.clearInputFile$.unsubscribe();
  }

  preparedFilesIsEmpty():boolean{
    if(!this.preparedFiles ) return false
    console.log(this.preparedFiles)
    return  this.preparedFiles!.length <= 0 
  }
}
