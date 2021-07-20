import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-puppy',
  templateUrl: './puppy.component.html',
  styleUrls: ['./puppy.component.scss']
})
export class PuppyComponent implements OnInit {
  @Input()puppy
  constructor() { }

  ngOnInit() {
  }

}
