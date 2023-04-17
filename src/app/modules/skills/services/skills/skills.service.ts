import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { CreateSkillDTO, Skill } from '../../interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AlertService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private _skills = new BehaviorSubject<Skill[] | null>(null);
  public skills$ = this._skills.asObservable();

  constructor(
    private readonly http: HttpClient,
    private readonly alert: AlertService,
  ) { }

  getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(`${environment.backendUrl}skills`).pipe(
      tap((resp) => this._skills.next(resp)),
      catchError((e) => this.handleErrorApi(e))
    )
  }
  
  postSkill(skill:CreateSkillDTO):Observable<Skill>{
    return this.http.post<Skill>(`${environment.backendUrl}skills`,skill).pipe(
      tap( (skill) => {
        this.alert.display({icon:'success',title:'Habilidad creada', toast:true, position: 'top-end', showConfirmButton: false,})
        this._skills.next([...<[]>this._skills.value, skill])
      } ),
      catchError( (e) => this.handleErrorApi(e, 'agregar') )
    )
  }

  editSkill(skill:CreateSkillDTO, idSkill:string): Observable<Skill>{
    return this.http.put<Skill>(`${environment.backendUrl}skills/${idSkill}`,skill).pipe(
      tap((newSkill) => {
        const newSkills = this._skills.value?.map((skill) => (skill.id === newSkill.id)? newSkill: skill ) || []
        this._skills.next(newSkills)
      }),
      catchError( (e) => this.handleErrorApi(e, 'editar'))
    )
  }
  
  deleteSkill(idSkill:string):Observable<any>{
    return this.http.delete(`${environment.backendUrl}skills/${idSkill}`).pipe(
      tap( () => {
        this.alert.display({icon:'success',title:'Habilidad borrada', toast:true, position: 'top-end', showConfirmButton: false,})
        this._skills.next([...<[]>this._skills.value?.filter(({id}) => id !== idSkill)])
      } ),
      catchError( (e) => this.handleErrorApi(e, 'eliminar') )
    )
  }

  private handleErrorApi(error : HttpErrorResponse, crudType?: 'agregar' | 'eliminar' | 'editar' ){

    if(crudType){
      this.alert.display({icon: 'error', title: `Error al ${crudType} la habilidad`, toast:true, position:'top-end', showConfirmButton:false})
    }

    return throwError(
      () => new Error(`Un error ha ocurrido; por favor reintente mas tarde.`)
    );
  }

}
