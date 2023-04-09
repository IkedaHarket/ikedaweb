import {  inject } from '@angular/core';
import {  Router } from '@angular/router';
import {  map, take, tap } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';

export const authGuard = () => {
    const router = inject(Router);
    const auth = inject(AuthService)
    return auth.renewToken().pipe(
      tap((resp) => resp ? true : router.navigate(['/auth/login']) )
    )
}

export const noAuthGuard = () => {
  const router = inject(Router);
  const auth = inject(AuthService)
  return auth.user$.pipe(
    take(1),
    map( (user) =>user ? router.navigate(['/welcome/dashboard']) : true),
  )
}