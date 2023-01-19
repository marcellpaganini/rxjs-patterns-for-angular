import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, map, retryWhen, tap } from 'rxjs';
import { Recipe } from '../model/recipe';
import { RxjsService } from '../rxjs.service';


@Component({
  selector: 'app-rxjs-retrieve-list',
  templateUrl: './rxjs-retrieve-list.component.html',
  styleUrls: ['./rxjs-retrieve-list.component.css']
})
export class RxjsRetrieveListComponent implements OnInit, OnDestroy {
  stream$ = from(['5', '10', '6', 'Helllo', '2']);

  constructor(private rxjsService: RxjsService) {}

  ngOnInit(): void {
    this.stream$.pipe(
      map((value) => {
        if (isNaN(value as any)) {
          throw new Error('This is not a number');
        }
        return parseInt(value);
      }),
      retryWhen((errors) => {
        return errors.pipe(tap(() => console.log('Retrying the source Observable...')))
      })
    ).subscribe({
      next: (res) => console.log('Value emmitted', res),
      error: (err) => console.log('Error occurred', err),
      complete: () => console.log('Stream completed'),
    });
  }

  ngOnDestroy(): void {}
}
