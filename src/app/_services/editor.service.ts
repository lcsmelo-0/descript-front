import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from '@environments/environment'
import { Editor } from '@app/_models'

@Injectable({ providedIn: 'root' })
export class EditorService {
  constructor(private http: HttpClient) {}

  getEditor() {
    return this.http.get<Editor>(`${environment.apiUrl}/editors`)
  }
}
