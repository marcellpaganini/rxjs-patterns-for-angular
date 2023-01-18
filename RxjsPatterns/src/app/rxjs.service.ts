import { Injectable } from '@angular/core';
import { Recipe } from './model/recipe';
import data from './data/recipes.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${environment.basePath}/recipes`);
  }
}
