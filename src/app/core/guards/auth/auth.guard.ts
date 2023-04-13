import {  inject } from '@angular/core';
import {  Router } from '@angular/router';
import {  map, take } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';

export const authGuard = () => {
    const router = inject(Router);
    const auth = inject(AuthService)
    return auth.renewToken().pipe(
      map((resp) => resp ? true : router.navigate(['/auth/login']) )
    )
}

export const noAuthGuard = () => {
  const router = inject(Router);
  const auth = inject(AuthService)

  if(!localStorage.getItem('token')) return true

  return auth.renewToken().pipe(
    map( (user) => user ? router.navigate(['/welcome/dashboard']) : true )
  )
}