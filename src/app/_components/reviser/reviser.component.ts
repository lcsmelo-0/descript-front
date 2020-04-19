import { Component, OnInit } from '@angular/core';

import { ImageService } from '@app/_services';

@Component({ templateUrl: 'reviser.component.html', selector: 'app-reviser-dashboard' })
export class ReviserComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    console.log('Incio do Dashboard de Revisor')
  }

}