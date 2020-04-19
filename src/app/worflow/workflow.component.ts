import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ImageService, WorkflowService } from '@app/_services';
import { Image } from '@app/_models';


@Component({ templateUrl: 'workflow.component.html' })
export class WorkflowComponent implements OnInit {
  
  imageId: number
  image: Image
  private routeSub: Subscription


  constructor(private route: ActivatedRoute, private imageService: ImageService, private workflowService: WorkflowService) {}

  ngOnInit() {
    console.log('init')
    this.routeSub = this.route.params.subscribe(params => {
     this.imageId = params['id']
    });

    this.imageService.getImage(this.imageId).subscribe(
      image => {
        this.image = image
      }
    )
    
  }

  onSubmit = () => {
    // step update
    //save step 1
  }
}