import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minegocioothers } from './minegocioothers';

describe('Minegocioothers', () => {
  let component: Minegocioothers;
  let fixture: ComponentFixture<Minegocioothers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Minegocioothers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Minegocioothers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
