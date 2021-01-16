import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { AuthenticationService } from './authentication.service'

// provide singleton service with provideIn
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private as: AuthenticationService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.as.validUser) {
            return true
        }
        else {
            this.router.navigate(['/login'])
            return false
        }
    }
}