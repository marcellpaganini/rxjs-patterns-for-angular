import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  selectedRecipe$ = this.sharedDataService.selectedRecipeAction$;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
  }

}
