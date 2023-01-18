import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RxjsService } from '../rxjs.service';

@Component({
  selector: 'app-rxjs-retrieve-list',
  templateUrl: './rxjs-retrieve-list.component.html',
  styleUrls: ['./rxjs-retrieve-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsRetrieveListComponent implements OnInit {
  recipes$ = this.rxjsService.recipes$;

  constructor(private rxjsService: RxjsService) {}

  ngOnInit(): void {}
}
