import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { Recipe } from '../model/recipe';
import { RxjsService } from '../rxjs.service';

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
          '') != -1)
    })
  );

  constructor(private rxjsService: RxjsService) {}

  ngOnInit(): void {}
}
