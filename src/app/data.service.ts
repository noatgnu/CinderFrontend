import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

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

  metadataHintMap: {[key: string]: string} = {
    "Age": `It is recommended to provide the age in the following format: {X}Y{X}M{X}D. Some valid examples are: 40Y (forty years),40Y5M (forty years and 5 months),40Y5M2D (forty years, 5 months, and 2 days),40Y-85Y (a range of ages from forty to eighty-five years)`,
    "Modification parameters": ``,
    "Enrichment process": `enrichment of phosphorylated Protein,enrichment of glycosylated Protein`,
    "Pooled sample": "Ex: not pooled; SN=sample 1,sample 2, …​ sample 9",
    "Xenograft": "Patient-derived xenografts (PDX). In those, the patient’s tumor is transplanted into another organism, usually a mouse. In these cases, the metadata, such as age and sex, MUST refer to the original patient and not the mouse. For experiments where both the PDX and the original tumor are measured, the PDX entry SHOULD reference the respective tumor sample’s source name in the characteristics[source name] column.",
    "Spiked compound": "Ex: CT=peptide;PS=PEPTIDESEQ;QY=10 fmol",
    "Synthetic peptide": "Ex: synthetic or not synthetic",
    "Phenotype": "Ex: normal, necrotic tissue",
    "Technical replicate": "Ex: 1, 2, 3",
    "Biological replicate": "Ex: 1, 2, 3",
    "Assay name": "Ex: run 1, run 2, run 3",
    "Label": "Ex: label free sample",
    "Organism": "Ex: Homo sapiens",
    "Tissue": "Ex: Liver.",
    "Disease": "Ex: Parkinson disease.",
    "Cell type": "Ex: glial cell",

  }


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
