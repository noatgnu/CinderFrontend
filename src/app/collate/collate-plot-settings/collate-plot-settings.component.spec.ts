import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollatePlotSettingsComponent } from './collate-plot-settings.component';

describe('CollatePlotSettingsComponent', () => {
  let component: CollatePlotSettingsComponent;
  let fixture: ComponentFixture<CollatePlotSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollatePlotSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollatePlotSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
