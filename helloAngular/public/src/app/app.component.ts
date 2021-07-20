import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello angular';
  puppies :any;
  primitive: string


  constructor(private _httpService: HttpService){
    this.puppies=[]
    this.primitive = 'Hello Class'
    this._httpService.getPuppies().subscribe(data => {
      console.log('AC got the puppies,',data)
      this.puppies = data
    })
  }


  
}
