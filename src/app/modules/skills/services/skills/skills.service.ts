import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { Skill } from '../../interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private _skills = new BehaviorSubject<Skill[] | null>(null);
  public skills$ = this._skills.asObservable();
  
  constructor(
    private readonly http: HttpClient
  ) { }

  getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(`${environment.backendUrl}skills`).pipe(
      tap((resp) => this._skills.next(resp)),
      catchError((e) => this.handleErrorApi(e))
    )
  }
  
  private handleErrorApi(error : HttpErrorResponse){
    return throwError(
      () => new Error(`Un error ha ocurrido; por favor reintente mas tarde.`)
    );
  }
}
