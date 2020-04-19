import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from '@environments/environment'

import { Image, User } from '@app/_models'
import { UserService } from './user.service'



@Injectable({ providedIn: 'root' })
export class ImageService {

  
  constructor(private http: HttpClient, private userService: UserService) { }

  submitImage = formValue => {
    return this.http.post<Image>(`${environment.apiUrl}/image-submit`, formValue)
      .pipe(image => {
        return image
      }
    )
  }
  getImageList = () => {
    return this.http.get<Image[]>(`${environment.apiUrl}/get-image-list`)

  }
  getImage = id => {
    return this.http.get<Image>(`${environment.apiUrl}/get-image/${id}`)
  }
}
