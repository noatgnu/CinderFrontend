import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeatmapTabPanelComponent } from './heatmap-tab-panel.component';

describe('HeatmapTabPanelComponent', () => {
  let component: HeatmapTabPanelComponent;
  let fixture: ComponentFixture<HeatmapTabPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatmapTabPanelComponent],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(HeatmapTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
