import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChildBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
