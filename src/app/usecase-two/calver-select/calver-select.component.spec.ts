import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalverSelectComponent } from './calver-select.component';

describe('CalverSelectComponent', () => {
  let component: CalverSelectComponent;
  let fixture: ComponentFixture<CalverSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalverSelectComponent]
    });
    fixture = TestBed.createComponent(CalverSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
