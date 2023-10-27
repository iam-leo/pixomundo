import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private error$ = new Subject<string>();
  private termSearch$ = new Subject<string>();

  constructor() { }

  setError(message: string){
    this.error$.next(message);
  }

  getError(): Observable<string>{
    return this.error$.asObservable();
  }

  sendTermSearch(term: string){
    this.termSearch$.next(term);
  }

  getTermSearch(): Observable<string>{
    return this.termSearch$.asObservable();
  }
}
