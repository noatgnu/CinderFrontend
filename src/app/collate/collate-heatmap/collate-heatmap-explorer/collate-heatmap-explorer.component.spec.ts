import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { CollateHeatmapExplorerComponent } from './collate-heatmap-explorer.component';

describe('CollateHeatmapExplorerComponent', () => {
  let component: CollateHeatmapExplorerComponent;
  let fixture: ComponentFixture<CollateHeatmapExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateHeatmapExplorerComponent],
      providers: [
        provideRouter([]),
        provideAnimationsAsync(),
        provideHttpClient(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CollateHeatmapExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
