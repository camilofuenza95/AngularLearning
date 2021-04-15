import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralServiceService } from './general-service.service';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService extends GeneralServiceService {


  constructor(http : HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts',http);
  }
}
