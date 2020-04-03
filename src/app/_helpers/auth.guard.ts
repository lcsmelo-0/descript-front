import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

import { AuthenticationService, UserService } from '@app/_services'
import { User } from '@app/_models'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  user: User

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue

    // // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })

    this.userService.getUser().subscribe((user) => {
      console.log('USER ON CanActive', user)
      if (user && user.client_id) {
        this.router.navigate(['client'])
        return true
      }
      if (user && user.reviser_id) {
        this.router.navigate(['reviser'])
        return true
      }
      if (user && user.editor_id) {
        this.router.navigate(['editor'])
        return true
      }
    })
    return true
  }
}
