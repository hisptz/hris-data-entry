import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicEmployeeFormComponent } from './public-employee-form.component';

describe('PublicEmployeeFormComponent', () => {
  let component: PublicEmployeeFormComponent;
  let fixture: ComponentFixture<PublicEmployeeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicEmployeeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicEmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
