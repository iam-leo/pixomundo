import { Component } from '@angular/core';

@Component({
  selector: 'app-search-img',
  templateUrl: './search-img.component.html',
  styleUrls: ['./search-img.component.css']
})
export class SearchImgComponent {
  nameImage: string;

  constructor(){
    this.nameImage = '';
  }

  searchImgs(){
    console.log(this.nameImage);
  }
}
