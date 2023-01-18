import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../model/recipe';
import { RxjsService } from '../rxjs.service';

@Component({
  selector: 'app-rxjs-retrieve-list',
  templateUrl: './rxjs-retrieve-list.component.html',
  styleUrls: ['./rxjs-retrieve-list.component.css']
})
export class RxjsRetrieveListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  subscription!: Subscription;

  constructor(private rxjsService: RxjsService) {}

  ngOnInit(): void {
    this.subscription = this.rxjsService.getRecipes()
      .subscribe({
      next: (res) => this.recipes = res,
      error: (err) => console.log('Error occurred', err),
      complete: () => console.log('Stream completed'),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
