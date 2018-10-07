import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('A test recipe','This is a test','https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/7b/Shoto_angry.png/revision/latest?cb=20170720022932'),
    new Recipe('A test recipe','This is a test','https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/7b/Shoto_angry.png/revision/latest?cb=20170720022932')
  ];

  constructor() { }

  ngOnInit() {
  }

}
