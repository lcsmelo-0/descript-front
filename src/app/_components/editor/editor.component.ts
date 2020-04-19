import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { ImageService, UserService } from '@app/_services';

import { Image, User } from '@app/_models'

@Component({ templateUrl: 'editor.component.html', selector: 'app-editor-dashboard' })
export class EditorComponent implements OnInit {
  
  loading: false
  images: Image[] 


  constructor(private imageService: ImageService, private sanitizer: DomSanitizer, private userService: UserService) {}

  sanitizeImageUrl = (imageUrl: string):SafeUrl => {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl)
  }

  ngOnInit() {
    
    this.userService.getUser().subscribe(user => {
      console.log(user[0].user)
    })

    this.imageService.getImageList().subscribe(
      images => {
       this.images = images
      }
    )
    
  }

}