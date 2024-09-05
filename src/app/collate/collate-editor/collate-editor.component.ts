import {Component, Input} from '@angular/core';
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {ProjectAddDialogComponent} from "../project-add-dialog/project-add-dialog.component";
import {CdkDrag, CdkDragDrop, CdkDragHandle, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {Project} from "../../project/project";
import {Collate} from "../collate";
import {CollateService} from "../collate.service";
import {FormsModule} from "@angular/forms";
import {ProjectCardViewerComponent} from "../project-card-viewer/project-card-viewer.component";
import {CollateSearchComponent} from "../collate-search/collate-search.component";
import {WebService} from "../../web.service";
import {SearchResult} from "../../search-session";
import {AnalysisGroup} from "../../analysis-group/analysis-group";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {CollateProjectListComponent} from "../collate-project-list/collate-project-list.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-collate-editor',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    MatToolbarRow,
    CdkDropList,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    CdkDragHandle,
    CdkDrag,
    FormsModule,
    MatCardSubtitle,
    ProjectCardViewerComponent,
    CollateSearchComponent,
    MatTabGroup,
    MatTab,
    MatFormField,
    MatInput,
    CollateProjectListComponent
  ],
  templateUrl: './collate-editor.component.html',
  styleUrl: './collate-editor.component.scss'
})
export class CollateEditorComponent {
  private _collate: Collate | null = null;
  @Input() set collateId(value: number | null) {
    if (value) {
      this.collateService.getCollate(value).subscribe((collate: Collate) => {
        this._collate = collate;
        this.projects = collate.projects;
        if (collate.settings.projectOrder) {
          this.projects = collate.settings.projectOrder.map(id => collate.projects.find(project => project.id === id) as Project);
        }
      })
    }
  }

  projects: Project[] = [];
  selectedIndex: number = 0;

  get collate(): Collate | null {
    return this._collate;
  }

  set collate(value: Collate | null) {
    this._collate = value;
  }
  editTitle: boolean = false;
  editGreeting: boolean = false;
  searchResults: {[projectId: number]: SearchResult[]} = {};
  projectAnalysisGroups: {[projectId: number]: AnalysisGroup[]} = {};
  analysisGroupProjects: {[analysisGroupId: number]: Project} = {};
  searchTerms: string[] = [];
  private _selectedSearchTerm: string = '';
  get selectedSearchTerm(): string {
    return this._selectedSearchTerm;
  }
  set selectedSearchTerm(value: string) {
    this._selectedSearchTerm = value;
  }
  filteredResults: { [projectId: number]: SearchResult[] } = {};

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private collateService: CollateService, private web: WebService) {}

  openProjectAddDialog() {
    const dialogRef = this.dialog.open(ProjectAddDialogComponent);

    dialogRef.afterClosed().subscribe((result: Project[]) => {
      if (result) {
        this.projects = this.projects.concat(result);
        if (this.collate) {
          this.collate.projects = this.projects;
          this.updateProjectOrder();
        }
      }
    });
  }


  updateProjectOrder() {

    if (this._collate) {
      this._collate.settings.projectOrder = this.projects.map(project => project.id);
    }
    console.log(this.collate)
  }

  updateCollate() {
    if (this._collate) {
      this.collateService.updateCollate(this._collate.id, this._collate).subscribe(() => {
        this.showSnackBar('Collate saved successfully');
      });
    }
  }

  toggleEditTitle() {
    this.editTitle = !this.editTitle;
  }

  toggleEditGreeting() {
    this.editGreeting = !this.editGreeting;
  }

  saveTitle() {
    this.toggleEditTitle();
    this.updateCollate();
  }

  saveGreeting() {
    this.toggleEditGreeting();
    this.updateCollate();
  }

  getSearchFromID(id: number) {
    this.web.getSearchSession(id).subscribe((data) => {
      console.log(data)
    })
    this.web.getSearchResults(id,99999).subscribe((data) => {
      console.log(data.results)
      this.distributeSearchResults(data.results).then();
    })
  }

  async associateAnalysisGroupsWithProjects() {
    const analysisGroups = await this.web.getAnalysisGroupsFromProjects(this.projects).toPromise();
    this.projectAnalysisGroups = {};
    this.analysisGroupProjects = {};
    if (analysisGroups) {
      analysisGroups.forEach(analysisGroup => {
        const projectId = analysisGroup.project;
        if (!this.projectAnalysisGroups[projectId]) {
          this.projectAnalysisGroups[projectId] = [];
        }
        this.projectAnalysisGroups[projectId].push(analysisGroup);

        this.analysisGroupProjects[analysisGroup.id] = this.projects.find(project => project.id === projectId) as Project;
      });
    }
  }

  async distributeSearchResults(results: SearchResult[]) {
    await this.associateAnalysisGroupsWithProjects();
    this.searchResults = {};
    this.searchTerms = Array.from(new Set(results.map(result => result.search_term)));
    results.forEach(result => {
      const analysisGroup = result.analysis_group.id;
      const project = this.analysisGroupProjects[analysisGroup];
      if (project) {
        if (!this.searchResults[project.id]) {
          this.searchResults[project.id] = [];
        }
        this.searchResults[project.id].push(result);
      }
    });
    this.selectedSearchTerm = this.searchTerms[0];
    this.filterDataBySearchTerm();
  }

  getFilteredSearchResults(): { [projectId: number]: SearchResult[] } {
    const filteredResults: { [projectId: number]: SearchResult[] } = {};
    Object.keys(this.searchResults).forEach(projectId => {
      // @ts-ignore
      filteredResults[projectId] = this.searchResults[projectId].filter(result => result.search_term === this.selectedSearchTerm);
    });

    return filteredResults;
  }

  filterDataBySearchTerm() {
    this.selectedSearchTerm = this.searchTerms[this.selectedIndex];
    this.filteredResults = this.getFilteredSearchResults();
  }

  onProjectOrderChanged(projects: Project[]) {
    this.projects = projects;
    this.updateProjectOrder();
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
}
