import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionModalComponent } from './selection-modal.component';

describe('SelectionModalComponent', () => {
  let component: SelectionModalComponent;
  let fixture: ComponentFixture<SelectionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
