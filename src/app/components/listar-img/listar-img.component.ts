import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-listar-img',
  templateUrl: './listar-img.component.html',
  styleUrls: ['./listar-img.component.css']
})
export class ListarImgComponent {
  term = '';
  suscription: Subscription;
  
  constructor( private _imageSevice: ImageService) {
    this.suscription = this._imageSevice.getTermSearch().subscribe( data => {
      console.log(data)
    })
  }
}
