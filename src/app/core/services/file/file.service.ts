import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, lastValueFrom, take, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

interface RespPostFile { url:string }

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private _filesBy: string[] = []

  private _clearInputFile = new BehaviorSubject<boolean>(false);
  public clearInputFile$ = this._clearInputFile.asObservable()

  constructor(
    private readonly http : HttpClient,
  ) { }

  clearInputFile():void {
    this._clearInputFile.next(true)
  }

  onFileChange(files: FileList): FileList | [] {
    if (files.length <= 0) return []
    const file:FileList = files;
    let invalidFile : boolean = false;
     
    if(invalidFile) this.clearInputFile()
  
    return (invalidFile) ? [] : file;
  }

  
  async getFile(fileBy:string, fileName:string):Promise<string | Error>{
    if(this._filesBy.length === 0 ) await this._setFilesBy();
    if(!this._filesBy.includes(fileBy))  return new Error(`FileBy invalido`)

    const file: Blob = await lastValueFrom(this.http.get(`${environment.backendUrl}files/${fileBy}/${fileName}`,{responseType: 'blob' }).pipe(
      catchError((e) => this.handleErrorApi(e))
    ))

    return await this._blobToStringAsync(file)
  }

  private _blobToStringAsync(file:Blob): Promise<string>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve, reject)=> {
      reader.addEventListener("load", () => resolve(reader.result as string))
      reader.addEventListener("error", () => reject(reader.result as string))
    })
  }

  private async _setFilesBy(): Promise<string[]>{
    return await lastValueFrom(this.http.get<string[]>(`${environment.backendUrl}files/fileBy`).pipe(
      take(1),
      tap(console.log),
      tap((types)=> this._filesBy = types),
      catchError((e) => this.handleErrorApi(e) )
    ))
  }
  
  async postFile(fileBy:string ,file:File):Promise<RespPostFile | Error>{
    if(this._filesBy.length === 0 ) await this._setFilesBy();
    if(!this._filesBy.includes(fileBy))  return new Error(`FileBy invalido`)
    const formData = new FormData()
    formData.append('file',file)
    return await lastValueFrom(
      this.http.post<RespPostFile>(`${environment.backendUrl}files/${fileBy}`,formData)
      .pipe(
        catchError((e) => this.handleErrorApi(e))
      ))
  }

  async deleteFile(fileBy:string ,fileName:string): Promise<void | Error>{
    if(this._filesBy.length === 0 ) await this._setFilesBy();
    if(!this._filesBy.includes(fileBy))  return new Error(`FileBy invalido`)

    return await lastValueFrom(
      this.http.delete<void>(`${environment.backendUrl}files/${fileBy}/${fileName}`)
      .pipe(
        tap(console.log),
        catchError((e) => this.handleErrorApi(e))
      ))
  }

  getNameFileByUrl(url:string){
    const arr = url.split('/')
    return arr[arr.length-1]
  }

  private handleErrorApi(error : HttpErrorResponse){
    return throwError(
      () => new Error(`Un error ha ocurrido; por favor reintente mas tarde.`)
    );
  }
}
