import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxjsService } from '../rxjs.service';


@Component({
  selector: 'app-rxjs-filter',
  templateUrl: './rxjs-filter.component.html',
  styleUrls: ['./rxjs-filter.component.css']
})
export class RxjsFilterComponent implements OnInit {

  recipeForm!: FormGroup;



  constructor(private fb: FormBuilder, private rxjsService: RxjsService) { }

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      title: [''],
      category: [''],
      ingredient: [''],
      tags: [''],
      prepTime: [''],
      cookingTime: [''],
    });
  }

  filterResults() {
    this.rxjsService.updateFilter(this.recipeForm.value);
  }

  clearFilter() {
  }

}
