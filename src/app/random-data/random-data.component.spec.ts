import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDataComponent } from './random-data.component';

describe('RandomDataComponent', () => {
  let component: RandomDataComponent;
  let fixture: ComponentFixture<RandomDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RandomDataComponent]
    });
    fixture = TestBed.createComponent(RandomDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
