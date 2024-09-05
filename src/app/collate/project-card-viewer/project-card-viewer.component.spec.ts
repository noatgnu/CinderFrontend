import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardViewerComponent } from './project-card-viewer.component';

describe('ProjectCardViewerComponent', () => {
  let component: ProjectCardViewerComponent;
  let fixture: ComponentFixture<ProjectCardViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectCardViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
