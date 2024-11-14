import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFrmComponent } from './student-frm.component';

describe('StudentFrmComponent', () => {
  let component: StudentFrmComponent;
  let fixture: ComponentFixture<StudentFrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFrmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
