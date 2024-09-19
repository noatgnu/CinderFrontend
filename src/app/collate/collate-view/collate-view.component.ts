import {Component, Input} from '@angular/core';
import {SearchResult} from "../../search-session";
import {Project} from "../../project/project";
import {Collate} from "../collate";
import {CollateService} from "../collate.service";
import {CollateHeaderComponent} from "../collate-header/collate-header.component";
import {CollateSearchComponent} from "../collate-search/collate-search.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {CollateProjectListComponent} from "../collate-project-list/collate-project-list.component";
import {WebService} from "../../web.service";
import {AnalysisGroup} from "../../analysis-group/analysis-group";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {AccountsService} from "../../accounts/accounts.service";
import {Router} from "@angular/router";
import {CollateTagsComponent} from "../collate-tags/collate-tags.component";
import {MatDialog} from "@angular/material/dialog";
import {CollateQrCodeDialogComponent} from "../collate-qr-code-dialog/collate-qr-code-dialog.component";

@Component({
  selector: 'app-collate-view',
  standalone: true,
  imports: [
    CollateHeaderComponent,
    CollateSearchComponent,
    MatTab,
    MatTabGroup,
    CollateProjectListComponent,
    MatIcon,
    MatIconButton,
    MatToolbarRow,
    MatToolbar,
    CollateTagsComponent
  ],
  templateUrl: './collate-view.component.html',
  styleUrl: './collate-view.component.scss'
})
export class CollateViewComponent {

  @Input() set collateId(value: number | null) {
    if (value) {
      this.collateService.getCollate(value).subscribe((collate: Collate) => {
        this.collate = collate;
        this.projects = collate.projects;
        if (collate.settings.projectOrder) {
          this.projects = collate.settings.projectOrder.map(id => collate.projects.find(project => project.id === id) as Project);
        }
        console.log(this.projects)
      })
    }
  }
  collate: Collate | null = null;
  projects: Project[] = [];
  filteredResults: { [projectId: number]: SearchResult[] } = {};
  searchTerms: string[] = [];
  selectedIndex: number = 0;
  searchResults: {[projectId: number]: SearchResult[]} = {};
  projectAnalysisGroups: {[projectId: number]: AnalysisGroup[]} = {};
  analysisGroupProjects: {[analysisGroupId: number]: Project} = {};
  private _selectedSearchTerm: string = '';
  get selectedSearchTerm(): string {
    return this._selectedSearchTerm;
  }
  set selectedSearchTerm(value: string) {
    this._selectedSearchTerm = value;
  }



  constructor(private dialog: MatDialog, private collateService: CollateService, private web: WebService, public accounts: AccountsService, private router: Router) {

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

  getSearchFromID(id: number) {
    this.web.getSearchSession(id).subscribe((data) => {
      console.log(data)
    })
    this.web.getSearchResults(id,99999).subscribe((data) => {
      console.log(data.results)
      this.distributeSearchResults(data.results).then();
    })
  }

  navigateToEdit() {
    if (this.collate) {
      this.router.navigate([`/collate/edit/${this.collate.id}`]);
    }
  }

  openQRCodeDialog() {
    const viewURL = window.location.href;
    const dialogRef = this.dialog.open(CollateQrCodeDialogComponent);
    dialogRef.componentInstance.url = viewURL;
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
