import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteManagement } from './cliente-management';

describe('ClienteManagement', () => {
  let component: ClienteManagement;
  let fixture: ComponentFixture<ClienteManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
