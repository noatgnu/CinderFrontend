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
}
