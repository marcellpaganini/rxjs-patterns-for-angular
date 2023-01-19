import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-rxjs-filter',
  templateUrl: './rxjs-filter.component.html',
  styleUrls: ['./rxjs-filter.component.css']
})
export class RxjsFilterComponent implements OnInit {

  recipeForm = this.fb.group({
    title: [''],
    category: [''],
    ingredient: [''],
    tags: [''],
    prepTime: [''],
    cookingTime: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  filterResults() {
  }

  clearFilter() {
  }

}
