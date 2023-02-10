import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from './model/recipe';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedRecipeSubject = new BehaviorSubject<Recipe>({});
  selectedRecipeAction = this.selectedRecipeSubject.asObservable();

  updateSelectedRecipe(recipe: Recipe) {
    this.selectedRecipeSubject.next(recipe);
  }

  constructor() { }
}
