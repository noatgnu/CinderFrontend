import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  analysisGroupChoices: {value: string, label: string}[] = [
    {value: "proteomics", label: "Proteomics"},
    {value: "ptm", label: "Post-translational Modification"},
    {value: "proteogenomics", label: "Proteogenomics"},
    {value: "metabolomics", label: "Metabolomics"},
    {value: "lipidomics", label: "Lipidomics"},
    {value: "glycomics", label: "Glycomics"},
    {value: "glycoproteomics", label: "Glycoproteomics"},
  ]
  constructor() { }

  getAnalysisGroupTypeLabel(value: string): string|undefined {
    let label: string|undefined = undefined
    this.analysisGroupChoices.forEach((choice) => {
      if (choice.value === value) {
        label = choice.label
      }
    })
    return label
  }
}
