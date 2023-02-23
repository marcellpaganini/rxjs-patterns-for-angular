import { Component, OnInit } from '@angular/core';
import { from, map, Observable, of, pipe } from 'rxjs';

@Component({
  selector: 'app-rxjs-review',
  templateUrl: './rxjs-review.component.html',
  styleUrls: ['./rxjs-review.component.css']
})
export class RxjsReviewComponent implements OnInit {
  students: Observable<Student[]> = of(students);

  originalList: Student[] = [];
  mapList: string[] = [];

  newList = this.students.pipe(
    map((students: Student[]) => {
      return students.map(({ firstName }) => firstName)
    })
  )

  constructor() { }

  ngOnInit(): void {
    this.students.subscribe(
      result => this.originalList = result
    )

    this.newList.subscribe((fName) => {
      this.mapList = fName;
    })
  }
}

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  averageGrade: number;
  gender: string;
  isActive: boolean;
}

const students = [
  {
   id: 1,
   firstName: "John",
   lastName: "McDonald",
   dateOfBirth: "2008-01-16",
   averageGrade: 7.5,
   gender: "M",
   isActive: true
  },
  {
    id: 2,
    firstName: "Brenda",
    lastName: "Meyers",
    dateOfBirth: "2005-05-13",
    averageGrade: 8.2,
    gender: "F",
    isActive: true
   },
   {
    id: 3,
    firstName: "Helen",
    lastName: "Timberlake",
    dateOfBirth: "2006-04-10",
    averageGrade: 6,
    gender: "F",
    isActive: true
   },
   {
    id: 4,
    firstName: "Pablo",
    lastName: "Galiardo",
    dateOfBirth: "2005-10-31",
    averageGrade: 7.9,
    gender: "M",
    isActive: true
   }
]
