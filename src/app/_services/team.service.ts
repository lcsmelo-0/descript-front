import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from '@environments/environment'

import { Team } from '@app/_models'

@Injectable({ providedIn: 'root' })
export class TeamService {
  constructor(private http: HttpClient) { }

  getTeam() {
    return this.http.get<Team>(`${environment.apiUrl}/teams`)
  }
}
