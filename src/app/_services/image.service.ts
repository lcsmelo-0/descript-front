import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from '@environments/environment'

@Injectable({ providedIn: 'root' })
export class ImageService {
  constructor(private http: HttpClient) { }

  submitImage(formValue) {
    return this.http.post(`${environment.apiUrl}/image-submit`, formValue)
      .pipe(image => {
        return image
      }
      )
  }
}
