import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, switchMap, tap, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LoginRequest, LoginResponse, RenewTokenResponse, User } from '../../interfaces';
import { AlertService } from 'src/app/core/services';
import { ErrorAPI } from 'src/app/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user = new Subject<User>();
  public user$ = this._user.asObservable();
  
  constructor(
    private readonly http : HttpClient,
    private readonly alert: AlertService
  ) { 
    if(localStorage.getItem('token') !== ''){
      this.renewToken().subscribe();
    }
  }

  sendLogIn(loginRequest: LoginRequest):Observable<LoginResponse>{
    this.alert.loading();
    return this.http.post<LoginResponse>(`${environment.backendUrl}auth/login`,loginRequest).pipe(
      tap(() => this.alert.close()),
      tap(({token}) => localStorage.setItem('token',token)),
      tap((response) => this._user.next(response) ),
      catchError( (e) => this.handleErrorApi(e) )
      )
  }
    
  renewToken():Observable<RenewTokenResponse>{
    return this.http.get<RenewTokenResponse>(`${environment.backendUrl}auth/check-status`).pipe(
      tap(({token}) => localStorage.setItem('token',token)),
      catchError( () => {
        localStorage.removeItem('token');
        return throwError(
          () => new Error(`Un error ha ocurrido; por favor reintente mas tarde.`)
        )
      } )
      )
  }

  private handleErrorApi(error : HttpErrorResponse){
    let text: string = JSON.stringify((error.error as ErrorAPI)?.message) || 'Lo sentimos, un error a ocurrido, esto no debio pasar :c'
    text = text.replace('["',"").replace('"]',"")
    this.alert.display({
      text,
      title: (error.error as ErrorAPI)?.error || 'Opss!!',
    });
    return throwError(
      () => new Error(`Un error ha ocurrido; por favor reintente mas tarde.`)
    );
  }
}
