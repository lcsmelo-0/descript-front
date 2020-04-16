import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'

import { ImageService } from '@app/_services';

@Component({ templateUrl: 'client.component.html', selector: 'app-client-dashboard' })
export class ClientComponent {
  imageSrc: string;
  loading = false

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    subtitle: new FormControl('', Validators.required),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private imageService: ImageService) { }

  get f() {
    return this.myForm.controls
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.myForm.patchValue({
          fileSource: reader.result
        });
      };
    }
  }

  onSubmit = () => {
    this.loading = true
    this.imageService.submitImage(this.myForm.value)
      .subscribe(res => {
        console.log(res)
      })
  }

}
