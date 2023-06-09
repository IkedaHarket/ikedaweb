import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, take, tap, throwError } from 'rxjs';
import { CreateProjectDto, Project } from '../../interfaces';
import { environment } from 'src/environments/environment';
import { AlertService } from 'src/app/core/services';
import ProjectsData from "../projects-data";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _projects = new BehaviorSubject<Project[] | null>(ProjectsData);
  public projects$ = this._projects.asObservable();

  public fileBy = 'web-pages';

  constructor(
    private readonly http: HttpClient,
    private readonly alert: AlertService,
  ) { }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(`${environment.backendUrl}web-pages`).pipe(
      take(1),
      tap(console.log),
      tap( (projects) => this._projects.next(projects)),
      catchError( (e) => this.handleErrorApi(e) )
    )
  }

  postProject(project: CreateProjectDto): Observable<Project>{
    return this.http.post<Project>(`${environment.backendUrl}web-pages`,project).pipe(
      take(1),
      tap( (project) => {
        this.alert.displayToast({icon:'success',title:'Proyecto creado'})
        this._projects.next([...<[]>this._projects.value, project])
      }),
      catchError( (e) => this.handleErrorApi(e, 'agregar') )
    )
  }

  editproject(idProject:string, project:CreateProjectDto):Observable<Project>{
    return this.http.put<Project>(`${environment.backendUrl}web-pages/${idProject}`,project).pipe(
      take(1),
      tap( (newProject) => {
        this.alert.displayToast({icon:'success',title:'Proyecto editado'})
        const newProjects = this._projects.value?.map((project) => (project.id === newProject.id)? newProject : project ) || []
        this._projects.next(newProjects)
      }),
      catchError( (e) => this.handleErrorApi(e, 'editar') )
      )
  }

  deleteProject(idProject:string):Observable<void>{
    return this.http.delete<void>(`${environment.backendUrl}web-pages/${idProject}`).pipe(
      take(1),
      tap( () => {
        this.alert.displayToast({icon:'success',title:'Proyecto borrado'})
        this._projects.next([...<[]>this._projects.value?.filter(({id}) => id !== idProject)])
      }),
      catchError( (e) => this.handleErrorApi(e, 'eliminar') )
      )
  }

  private handleErrorApi(error : HttpErrorResponse,  crudType?: 'agregar' | 'eliminar' | 'editar'){

    if(crudType){
      this.alert.displayToast({icon: 'error', title: `Error al ${crudType} el projecto`})
    }

    return throwError(
      () => new Error(`Un error ha ocurrido; por favor reintente mas tarde.`)
    );
  }
  
}
