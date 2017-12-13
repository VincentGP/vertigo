import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChildAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
