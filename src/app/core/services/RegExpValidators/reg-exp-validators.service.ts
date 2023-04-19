import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegExpValidatorsService {
  
  validateURL = new RegExp("^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$");

  constructor() { }
}
