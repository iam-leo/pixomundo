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
  listImages: any[] = [];
  loading = false;
  
  constructor( private _imageSevice: ImageService) {
    this.suscription = this._imageSevice.getTermSearch().subscribe( data => {
      this.loading = true;
      this.term = data;
      setTimeout(() => {
        this.getImages();        
      }, 2500);
    })
  }

  getImages(){
    this._imageSevice.getImages(this.term).subscribe({
      next: data => {
        this.loading = false;
        if(data.hits.length === 0){
          this._imageSevice.setError('Ops... Images not found!');
        }

        this.listImages = data.hits
      }, error: error => {
        // Error server
        this._imageSevice.setError('Ops... An error ocurred!');
        this.loading = false;
      }
    })
  }
}
