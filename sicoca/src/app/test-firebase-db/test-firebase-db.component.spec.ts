import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFirebaseDBComponent } from './test-firebase-db.component';

describe('TestFirebaseDBComponent', () => {
  let component: TestFirebaseDBComponent;
  let fixture: ComponentFixture<TestFirebaseDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestFirebaseDBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestFirebaseDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
