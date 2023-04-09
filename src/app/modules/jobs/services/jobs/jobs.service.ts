import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, take, tap, throwError } from 'rxjs';
import { Job } from '../../interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private _jobs = new BehaviorSubject<Job[] | null>(null);
  public jobs$ = this._jobs.asObservable();

  constructor(
    private readonly http: HttpClient,
  ) { }

  getJobs():Observable<Job[]>{
    return this.http.get<Job[]>(`${environment.backendUrl}jobs`).pipe(
      take(1),
      tap((jobs)=> this._jobs.next(jobs)),
      catchError((e)=> this.handleErrorApi(e)) 
    )
  }

  private handleErrorApi(error : HttpErrorResponse){
    return throwError(
      () => new Error(`Un error ha ocurrido; por favor reintente mas tarde.`)
    );
  }
}
