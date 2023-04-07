import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../../interfaces';
import initialData from './initial-data';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _menu = new BehaviorSubject<MenuItem[]>(initialData)
  public menu$ = this._menu.asObservable();

  constructor() { }

  
}
