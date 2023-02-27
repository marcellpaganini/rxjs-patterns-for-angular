import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  fileForm!: FormGroup;
  files: string[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.fileForm = this.fb.group({
      name: new FormControl(''),
      file: new FormControl('')
    });
  }

  onFileChange(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.files.push(event.target.files[i]);
    }
  }

  // valueChanges$ = this.recipeForm.valueChanges.pipe(
  //   concatMap(formValue => this.service.saveRecipe(formValue)),
  //   catchError(errors => of(errors)),
  //   tap(result => this.saveSuccess(result))
  // );

  submit() {
    console.log('submitted');
  }

  // uploadedFilesSubject$ = new BehaviorSubject<File[]>([]);
  // uploadRecipeImages$ = this.uploadedFilesSubject$.pipe(
  //   switchMap(uploadedFiles => forkJoin(uploadedFiles.map((file: File) =>
  //     this.uploadService.upload(this.recipeForm.value.id, file).pipe(
  //       catchError(errors => of(errors)),
  //       finalize(() => this.calculateProgressPercentage(++this.counter, uploadedFiles.length))
  //     ))))
  // )


  // private calculateProgressPercentage(completedRequests: number, totalRequests: number) {
  //   this.uploadProgress = (completedRequests/totalRequests)*100;
  // }

}
