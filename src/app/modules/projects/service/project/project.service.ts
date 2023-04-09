import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, take, tap, throwError } from 'rxjs';
import { Project } from '../../interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _projects = new BehaviorSubject<Project[] | null>(null);
  public projects$ = this._projects.asObservable();

  constructor(
    private readonly http: HttpClient,
  ) { }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(`${environment.backendUrl}web-pages`).pipe(
      take(1),
      tap( (projects) => this._projects.next(projects)),
      catchError( (e) => this.handleErrorApi(e) )
    )
  }

  private handleErrorApi(error : HttpErrorResponse){
    return throwError(
      () => new Error(`Un error ha ocurrido; por favor reintente mas tarde.`)
    );
  }
  
}
