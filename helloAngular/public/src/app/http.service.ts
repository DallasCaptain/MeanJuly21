import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient) {}
  
  getPuppies(){
    return this._http.get('/api/puppies')
  }
  
  createPuppy() {
    return this._http.post('/api/puppies',{name:'JellyBean',color:'White'})
  }
}
