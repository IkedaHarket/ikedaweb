import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError,Observable, take, tap, catchError } from 'rxjs';
import { Album } from '../../interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _albums = new BehaviorSubject<Album[] | null>(null);
  public albums$ = this._albums.asObservable();

  constructor(
    private readonly http: HttpClient,
  ) { }

  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>(`${environment.backendUrl}album`).pipe(
      take(1),
      tap( (albums) => this._albums.next(albums)),
      catchError( (e) => this.handleErrorApi(e) )
    )
  }

  private handleErrorApi(error : HttpErrorResponse){
    return throwError(
      () => new Error(`Un error ha ocurrido; por favor reintente mas tarde.`)
    );
  }
}
