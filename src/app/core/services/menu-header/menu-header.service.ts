import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../../interfaces';
import initialData from './initial-data';

@Injectable({
  providedIn: 'root'
})
export class MenuHeaderService {

  private _menuData: MenuItem[] = initialData;

  private _menu = new BehaviorSubject<MenuItem[]>(this._menuData)
  public menu$ = this._menu.asObservable();

  constructor() { }

  setLogInMenu(){
    const menuData: MenuItem[] = this._menuData.filter(({route}) => route !== "auth")
    menuData.push({icon:'', label:'Panel', route:'/welcome/dashboard'})
    this._menu.next(menuData)
  }

  setLogOutMenu(){
    this._menu.next(initialData)
  }

}
