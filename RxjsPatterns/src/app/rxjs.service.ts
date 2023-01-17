import { Injectable } from '@angular/core';
import { Recipe } from './model/recipe';
import data from './data/recipes.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  constructor(private http: HttpClient) { }
}
