import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionVisionValuesComponent } from './mission-vision-values';

describe('MissionVisionValuesComponent', () => {
  let component: MissionVisionValuesComponent;
  let fixture: ComponentFixture<MissionVisionValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionVisionValuesComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(MissionVisionValuesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
