import { Component } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'app-search-img',
  templateUrl: './search-img.component.html',
  styleUrls: ['./search-img.component.css']
})
export class SearchImgComponent {
  nameImage: string;

  constructor( private _imageService: ImageService){
    this.nameImage = '';
  }

  searchImgs(){
    // Validation search input
    if(this.nameImage === ''){
      this._imageService.setError('Add a search term!');
      return
    }

    this._imageService.sendTermSearch(this.nameImage);
  }
}
