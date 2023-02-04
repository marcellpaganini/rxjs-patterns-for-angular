import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';


const coldObservable$ = new Observable(observer => {
  observer.next(Math.random());
  observer.next(Math.random());
  observer.complete();
})

const hotObservable$: Observable<Event> = fromEvent(document, 'click');

@Component({
  selector: 'app-multicasting',
  templateUrl: './multicasting.component.html',
  styleUrls: ['./multicasting.component.css']
})
export class MulticastingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    coldObservable$.subscribe(data => {
      //First subscriber
      console.log(`The first Observer: ${data}`);
      //Second subscriber
      console.log(`The second observer: ${data}`);
    });

    hotObservable$.subscribe((x: Event) => {
      console.log(`The first subscriber: [${x.type}]`);
    });

    hotObservable$.subscribe((mouseEvent: MouseEvent | any) => {
      console.log(`The second subscriber: [${mouseEvent.clientX}, ${mouseEvent.clientY}]`);
    });
  }

}
