import { Component, OnInit } from '@angular/core'
import { first } from 'rxjs/operators'

import { User } from '@app/_models'
import { UserService } from '@app/_services'

@Component({ templateUrl: 'dashboard.component.html', selector: 'app-dashboard' })
export class DashboardComponent implements OnInit {
  loading = false
  user: User[]
  isClient: boolean
  isEditor: boolean
  isReviser: boolean

  constructor(private userService: UserService) { }
  ngOnInit() {
    this.loading = true
    this.userService.getUser().pipe(first()).subscribe(user => {

      if (user[0].user.client_id) {
        this.isClient = true
        this.loading = false
      }

      if (user[0].user.reviser_id) {
        this.isReviser = true
        this.loading = false
      }

      if (user[0].user.editor_id) {
        this.isEditor = true
        this.loading = false
      }

    })
  }
}
