import { Injectable } from '@angular/core';
import { Recipe } from './model/recipe';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  recipes$ = this.http.get<Recipe[]>(`${environment.basePath}/recipes`).pipe(
    catchError(error => of([]))
  );

  constructor(private http: HttpClient) { }
}
