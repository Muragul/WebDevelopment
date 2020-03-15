import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  currentRate = 8;
  description = 'some text';
  ingredients = 'some ingredients';
  constructor() { }

  ngOnInit() {
  }

}
