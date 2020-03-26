import { Component, OnInit } from '@angular/core';
import { List } from '../list';

@Component({
  selector: 'app-best-recipes',
  templateUrl: './best-recipes.component.html',
  styleUrls: ['./best-recipes.component.css']
})
export class BestRecipesComponent implements OnInit {

  recipes = [
    List[5],
    List[7],
    List[13]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
