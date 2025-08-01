import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionesList } from './direcciones-list';

describe('DireccionesList', () => {
  let component: DireccionesList;
  let fixture: ComponentFixture<DireccionesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireccionesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
