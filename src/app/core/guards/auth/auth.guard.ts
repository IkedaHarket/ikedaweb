import {  inject } from '@angular/core';
import {  Router } from '@angular/router';
import {  tap } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';

export const authGuard = () => {
    const router = inject(Router);
    const auth = inject(AuthService)
    
    return auth.renewToken().pipe(
      tap((resp) => resp ? true : router.navigate(['/auth/login']) )
    )
}