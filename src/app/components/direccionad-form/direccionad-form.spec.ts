import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionadForm } from './direccionad-form';

describe('DireccionadForm', () => {
  let component: DireccionadForm;
  let fixture: ComponentFixture<DireccionadForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionadForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireccionadForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
