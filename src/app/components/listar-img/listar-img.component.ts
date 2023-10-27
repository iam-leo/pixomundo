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
  imgPerPage = 30;
  currentPage = 1;
  totalPages = 0;
  
  constructor( private _imageSevice: ImageService) {
    this.suscription = this._imageSevice.getTermSearch().subscribe( data => {
      this.listImages = []
      this.loading = true;
      this.currentPage = 1;
      this.term = data;
      setTimeout(() => {
        this.getImages();        
      }, 2500);
    })
  }

  getImages(){
    this._imageSevice.getImages(this.term, this.imgPerPage, this.currentPage).subscribe({
      next: data => {
        this.loading = false;
        if(data.hits.length === 0){
          this._imageSevice.setError('Ops... Images not found!');
        }
        
        // Calculate total pages
        this.totalPages = Math.ceil(data.totalHits / this.imgPerPage);
        
        this.listImages = data.hits
      }, error: error => {
        // Error server
        this._imageSevice.setError('Ops... An error ocurred!');
        this.loading = false;
      }
    })
  }

  previousPage(){
    if(this.currentPage === 1){
      return
    }

    this.currentPage--;
    this.loading = true; 
    this.listImages = [];
    this.getImages();
  }


  nextPage(){
    if(this.currentPage === this.totalPages){
      return
    }

    this.currentPage++;
    this.loading = true; 
    this.listImages = [];
    this.getImages();
  }
}
