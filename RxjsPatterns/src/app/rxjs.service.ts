import { Injectable } from '@angular/core';
import { Recipe } from './model/recipe';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, switchMap, timer, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  recipes$ = this.getRecipesList();

  /* Create the action stream */
  private filterRecipeSubject = new BehaviorSubject<Recipe>({title: '', category: ''});

  /* Extract the readonly stream */
  filterRecipesAction$ = this.filterRecipeSubject.asObservable();

  constructor(private http: HttpClient) { }

  updateFilter(criteria: Recipe) {
    this.filterRecipeSubject.next(criteria);
  }

  saveRecipe(formValue: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${environment.basePath}/recipes/save`, formValue);
  }

  getRecipesList(): Observable<Recipe[]> {
    if (!this.recipes$) {
      return timer(0, 50000).pipe(
        switchMap(_ => this.http.get<Recipe[]>(`${environment.basePath}/recipes`)),
        /* Popular way of doing it */
        shareReplay(1)
        /* Recommended way with RxJS7
        share({
          connector : () => new ReplaySubject(),
          resetOnRefCountZero : true,
          restOnComplete: true,
          resetOnError: true
        }) */
      );
    }
    return this.recipes$;
  }
}
