import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecaseOneComponent } from './usecase-one.component';

describe('UsecaseOneComponent', () => {
  let component: UsecaseOneComponent;
  let fixture: ComponentFixture<UsecaseOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UsecaseOneComponent]
    });
    fixture = TestBed.createComponent(UsecaseOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
