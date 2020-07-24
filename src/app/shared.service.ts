import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  blogTitle = 'Santhosh Blog';
  baseUrl = 'http://localhost:4200/'
  constructor() { }
}
