import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CollateHeatmapExplorerComponent } from './collate-heatmap-explorer/collate-heatmap-explorer.component';

const routes: Routes = [
  {
    path: ':collateId',
    component: CollateHeatmapExplorerComponent,
  },
  {
    path: ':collateId/:sessionId',
    component: CollateHeatmapExplorerComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CollateHeatmapModule {}
