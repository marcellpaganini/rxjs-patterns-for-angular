import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxjsService } from '../rxjs.service';
import * as recipeTags from '../data/tags';
import { Tag } from '../model/tag';
import { BehaviorSubject, catchError, concatMap, finalize, forkJoin, of, switchMap, tap } from 'rxjs';
import { UploadRecipesPreviewService } from '../upload-recipes-preview.service';


@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  counter: number = 0;
  uploadProgress: number = 0;
  recipeForm!: FormGroup;
  tags!: Tag[];
  valueChanges$: any;

  constructor(private fb: FormBuilder, private rxjsService: RxjsService, private uploadService: UploadRecipesPreviewService) { }


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

    this.tags = recipeTags.TAGS;

    this.valueChanges$ = this.recipeForm.valueChanges.pipe(
      concatMap(formValue => this.rxjsService.saveRecipe(formValue)),
      catchError(errors => of(errors)),
      tap(result=>this.saveSuccess(result))
    );
  }

  uploadedFilesSubject$ = new BehaviorSubject<File[]>([]);

  uploadRecipeImages$ = this.uploadedFilesSubject$.pipe(
    switchMap(uploadedFiles => forkJoin(uploadedFiles.map((file: File) =>
      this.uploadService.upload(this.recipeForm.value.id, file).pipe(
        catchError(errors => of(errors)),
        finalize(() => this.calculateProgressPercentage(++this.counter, uploadedFiles.length))
      ))))
  )

  onUpload(files: File[]) {
    this.uploadedFilesSubject$.next(files);
  }

  private calculateProgressPercentage(completedRequests: number, totalRequests: number) {
    this.uploadProgress = (completedRequests/totalRequests)*100;
  }

  saveSuccess(result: any) {
    console.log('Saved successfully');
  }
}
