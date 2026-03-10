import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuravidacareprojectsComponent } from './pura-vida-care-project';

describe('PuravidacareprojectsComponent', () => {
  let component: PuravidacareprojectsComponent;
  let fixture: ComponentFixture<PuravidacareprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuravidacareprojectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PuravidacareprojectsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
