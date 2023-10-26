import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private $error = new Subject<string>();

  constructor() { }

  setError(message: string){
    this.$error.next(message)
  }

  getError(): Observable<string>{
    return this.$error.asObservable();
  }
}
