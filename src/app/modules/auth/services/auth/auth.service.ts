import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, of, take, tap, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LoginRequest, LoginResponse, RenewTokenResponse, User } from '../../interfaces';
import { AlertService, MenuHeaderService } from 'src/app/core/services';
import { ErrorAPI } from 'src/app/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user = new BehaviorSubject<User | null>(null);
  public user$ = this._user.asObservable();
  
  constructor(
    private readonly http : HttpClient,
    private readonly alert: AlertService,
    private readonly menu: MenuHeaderService,
    private readonly router: Router,
  ) { }

  sendLogIn(loginRequest: LoginRequest):Observable<LoginResponse>{
    this.alert.loading();
    return this.http.post<LoginResponse>(`${environment.backendUrl}auth/login`,loginRequest).pipe(
      take(1),
      tap((resp) => {
        this.alert.close();
        this._logIn(resp);
        this.router.navigateByUrl('/welcome/dashboard')
      }),
      catchError( (e) => this.handleErrorApi(e) )
      )
  }
    
  renewToken():Observable<RenewTokenResponse | boolean>{
    return this.http.get<RenewTokenResponse>(`${environment.backendUrl}auth/check-status`).pipe(
      take(1),
      tap((resp) => this._logIn(resp) ),
      catchError( () => {
        this.logOut();
        return of(false)
      } )
      )
  }

  logOut(){
    localStorage.removeItem('token');
    this.menu.setLogOutMenu()
    this._user.next(null)
  }
  
  private _logIn(user:User){
    this._user.next(user);
    localStorage.setItem('token',user.token)
    this.menu.setLogInMenu();
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
