import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from '@environments/environment'
import { Workflow } from '@app/_models'

@Injectable({ providedIn: 'root' })
export class WorkflowService {

  constructor(private http: HttpClient) { }

  startWorkflow = (team_id: number, image_id: number, step: number) => {
    return this.http.post<Workflow>(`${environment.apiUrl}/start-workflow`, { team_id, image_id, step  })
  }

  updateWorkflow = (step: number) => {
    return this.http.patch<Workflow>(`${environment.apiUrl}/start-workflow`, step)
  }

  reproveWorkflow = () => {
    this.http.get<Workflow>(`${environment.apiUrl}/get-worflow-status`)
      .subscribe(workflow => {
        this.http.patch<Workflow>(`${environment.apiUrl}/start-workflow`, workflow.count+1)
      })
  }
}
