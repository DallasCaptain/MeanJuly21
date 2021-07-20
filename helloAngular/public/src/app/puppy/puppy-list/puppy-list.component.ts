import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-puppy-list',
  templateUrl: './puppy-list.component.html',
  styleUrls: ['./puppy-list.component.scss']
})
export class PuppyListComponent implements OnInit {
  @Input()puppies;
  constructor() { }

  ngOnInit() {
  }

}
