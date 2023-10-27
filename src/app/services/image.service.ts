import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private error$ = new Subject<string>();
  private termSearch$ = new Subject<string>();

  constructor( private http: HttpClient) { }

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

  getImages(term: string): Observable<any> {
    const URL = environment.API_URL + environment.PIXABAY_API_KEY + '&q=' + term
    return this.http.get(URL);
  }
}
