import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  likes = 8;
  description = 'some text';
  title='Title';
  ingredients = 'some ingredients';
  comments = 3;
  front_image = '../../assets/post17.png';
  constructor() { }

  ngOnInit() {
  }

  show(){
    document.getElementById("modal1").classList.toggle("modal2");
  }

}
