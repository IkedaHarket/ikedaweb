import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';

import { environment } from 'src/environments/environment'
import { Configuration } from '../../interfaces';


@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private _configuration = new BehaviorSubject<Configuration | null>(null);
  public  configuration$ = this._configuration.asObservable();

  constructor(
    private readonly http: HttpClient
  ) {}

  getConfiguration(): Observable<Configuration>{
    return this.http.get<Configuration>(`${environment.backendUrl}configurations`).pipe(
      tap( c => this._configuration.next(c) ),
      catchError(this.handleErrorApi)
    )
  }

  private handleErrorApi(error : HttpErrorResponse){
    return throwError(
      () => new Error(`Un error ha ocurrido; por favor reintente mas tarde.`)
    );
  }
}
