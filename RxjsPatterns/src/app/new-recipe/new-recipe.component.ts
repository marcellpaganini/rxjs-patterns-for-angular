import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxjsService } from '../rxjs.service';
import * as recipeTags from '../data/tags';
import { Tag } from '../model/tag';


@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  recipeForm!: FormGroup;
  tags!: Tag[];
  constructor(private fb: FormBuilder, private rxjsService: RxjsService) { }

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      id: Math.floor(1000 + Math.random() * 9000),
      title: [''],
      category: [''],
      ingredients: [''],
      tags: [''],
      imageUrl: [''],
      cookingTime: [''],
      yield: [''],
      prepTime: [''],
      steps: ['']
    });

    this.tags = recipeTags.TAGS
  }
}
