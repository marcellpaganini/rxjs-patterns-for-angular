import { Injectable } from '@angular/core';
import { Recipe } from './model/recipe';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  recipes$ = this.http.get<Recipe[]>(`${environment.basePath}/recipes`).pipe(
    catchError(error => of([]))
  );

  /* Create the action stream */
  private filterRecipeSubject = new BehaviorSubject<Recipe>({title: ''});

  /* Extract the readonly stream */
  filterRecipesAction$ = this.filterRecipeSubject.asObservable();

  constructor(private http: HttpClient) { }

  updateFilter(criteria: Recipe) {
    this.filterRecipeSubject.next(criteria);
  }
}
