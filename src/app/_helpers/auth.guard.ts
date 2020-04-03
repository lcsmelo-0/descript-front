import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

import { UserService } from '@app/_services'
import { User } from '@app/_models'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  user: User

  constructor(private router: Router, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
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

    // // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
    return false
  }
}
