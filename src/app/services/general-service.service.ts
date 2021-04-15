import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../interfaces/IPost';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  constructor(private url: string, private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url)
    .pipe(
       map(response => response)
    )
  }



}
