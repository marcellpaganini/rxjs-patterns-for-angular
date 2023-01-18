import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';
import { RxjsService } from '../rxjs.service';

@Component({
  selector: 'app-rxjs-retrieve-list',
  templateUrl: './rxjs-retrieve-list.component.html',
  styleUrls: ['./rxjs-retrieve-list.component.css']
})
export class RxjsRetrieveListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private rxjsService: RxjsService) {}

  ngOnInit(): void {
    this.rxjsService.getRecipes().subscribe(result => {
      this.recipes = result;
    });
  }

}
