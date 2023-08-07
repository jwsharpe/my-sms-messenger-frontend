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
  const authService = inject(AuthService); // Inject the AuthService using inject
  if (authService.isAuthenticated()) {
    return true;
  } else {
    const router = inject(Router);
    return router.createUrlTree(['/auth']);
  }
};
