import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree => {
  const authService = inject(AuthService);
  if (authService.isAuthenticated()) {
    const router = inject(Router);
    router.createUrlTree(['/dashboard']);
    return true;
  } else {
    const router = inject(Router);
    router.createUrlTree(['/auth']);
    return false;
  }
};
