import { Injectable } from '@angular/core';
import { Recipe } from './model/recipe';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  recipes$ = this.http.get<Recipe[]>(`${environment.basePath}/recipes`);

  constructor(private http: HttpClient) { }
}
