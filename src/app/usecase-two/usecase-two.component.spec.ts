import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecaseTwoComponent } from './usecase-two.component';

describe('UsecaseTwoComponent', () => {
  let component: UsecaseTwoComponent;
  let fixture: ComponentFixture<UsecaseTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UsecaseTwoComponent]
    });
    fixture = TestBed.createComponent(UsecaseTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
