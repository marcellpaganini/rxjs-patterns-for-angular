import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Recipe } from '../model/recipe';
import { RxjsService } from '../rxjs.service';

@Component({
  selector: 'app-rxjs-retrieve-list',
  templateUrl: './rxjs-retrieve-list.component.html',
  styleUrls: ['./rxjs-retrieve-list.component.css'],
})
export class RxjsRetrieveListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  destroy$ = new Subject<void>();
  constructor(private rxjsService: RxjsService) {}

  ngOnInit(): void {
    this.rxjsService
      .getRecipes()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.recipes = result;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
