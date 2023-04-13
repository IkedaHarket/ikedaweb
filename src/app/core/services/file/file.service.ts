import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, take, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private _filesBy: string[] = []

  constructor(
    private readonly http : HttpClient
  ) { 
    // setTimeout(()=> this.getFile('web-pages','942fbda6-b830-45c5-a73d-c26865f31f9d.jpeg').then(console.log),2000)
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
  
  private handleErrorApi(error : HttpErrorResponse){
    return throwError(
      () => new Error(`Un error ha ocurrido; por favor reintente mas tarde.`)
    );
  }
}
