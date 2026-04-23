import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeatmapSidebarComponent } from './heatmap-sidebar.component';
import { defaultHeatmapViewState } from '../collate-heatmap.types';

describe('HeatmapSidebarComponent', () => {
  let component: HeatmapSidebarComponent;
  let fixture: ComponentFixture<HeatmapSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatmapSidebarComponent],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(HeatmapSidebarComponent);
    component = fixture.componentInstance;
    component.state = defaultHeatmapViewState();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
