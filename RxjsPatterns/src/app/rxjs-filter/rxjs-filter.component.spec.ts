import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsFilterComponent } from './rxjs-filter.component';

describe('RxjsFilterComponent', () => {
  let component: RxjsFilterComponent;
  let fixture: ComponentFixture<RxjsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
