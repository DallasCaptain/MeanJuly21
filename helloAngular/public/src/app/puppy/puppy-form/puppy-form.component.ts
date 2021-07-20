import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-puppy-form',
  templateUrl: './puppy-form.component.html',
  styleUrls: ['./puppy-form.component.scss']
})
export class PuppyFormComponent implements OnInit {

  newPuppy: any;

  constructor(private _httpService: HttpService) {
    this.newPuppy = {name:'',color:''}
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.newPuppy)
    this._httpService.createPuppy(this.newPuppy).subscribe(data=>{
      console.log('the new puppy data:',data)
    })
  }

}
