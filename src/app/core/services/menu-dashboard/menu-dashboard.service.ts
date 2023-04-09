import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import initialData from './initial-data';
import { MenuItem } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MenuDashboardService {

  private _menuData: MenuItem[] = initialData;

  private _menu = new BehaviorSubject<MenuItem[]>(this._menuData);
  public menu$ = this._menu.asObservable();

  constructor() { }

  
}
