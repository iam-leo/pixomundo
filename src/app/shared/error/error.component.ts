import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnDestroy {
  text = '';
  show = false;
  suscription: Subscription;

  constructor( private _imageService: ImageService) {
    this.suscription = this._imageService.getError().subscribe( data => {
      this.text = data;
      this.showMessage();
    })
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  showMessage(){
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }

}
