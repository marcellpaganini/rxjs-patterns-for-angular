import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { Recipe } from '../model/recipe';
import { RxjsService } from '../rxjs.service';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-rxjs-retrieve-list',
  templateUrl: './rxjs-retrieve-list.component.html',
  styleUrls: ['./rxjs-retrieve-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsRetrieveListComponent implements OnInit {
  recipes$ = this.rxjsService.recipes$;

  filterRecipesAction$ = this.rxjsService.filterRecipesAction$;
  filteredRecipes$ = combineLatest([this.recipes$, this.filterRecipesAction$]).pipe(
    map(([recipes, filter]:[Recipe[], Recipe]) => {
      return recipes.filter(recipe =>
        recipe.title?.toLowerCase().indexOf(
          filter?.title?.toLowerCase() ??
          '') != -1 && recipe.category?.toLowerCase().indexOf(
            filter?.category?.toLowerCase() ??
            '') != -1
          )
    })
  );

  constructor(private rxjsService: RxjsService, private sharedDataService: SharedDataService, private router: Router) {}

  ngOnInit(): void {}

  editRecipe(recipe: Recipe) {
    this.sharedDataService.updateSelectedRecipe(recipe);
    this.router.navigate(['/recipes/details']);
  }
}
