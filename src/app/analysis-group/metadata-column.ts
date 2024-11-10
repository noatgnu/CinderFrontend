import {SourceFile} from "./source-file";

export interface MetadataColumn {
  name: string,
  type: string,
  column_position: number,
  value: string,
  analysis_group: number|null,
  source_file: number|null,
  id: number,
  created_at: Date,
  updated_at: Date,
}

export interface MetadataColumnQuery {
  count: number;
  next: string|null;
  previous: string|null;
  results: MetadataColumn[];
}

export class SDRF {
  metadata: MetadataColumn[];
  sourceFiles: SourceFile[];
  constructor(sourceFiles: SourceFile[]) {
    this.sourceFiles = sourceFiles;
    this.metadata = sourceFiles.map((sourceFile) => sourceFile.metadata_columns).flat();
  }

  getAllUniqueColumnPositionsSorted(): number[] {
    return  [... new Set(this.metadata.map((column) => column.column_position))].sort();
  }

  getColumnsByPosition(position: number): MetadataColumn[] {
    return this.metadata.filter((column) => column.column_position === position);
  }

  composeTable(): string[][] {
    const table = []
    const columnPositions = this.getAllUniqueColumnPositionsSorted();
    const headerColumnPoisitionMap: any = {}
    for (const file of this.sourceFiles) {
      const row: string[] = [file.name];
      for (const position of columnPositions) {
        const column = file.metadata_columns.find((column) => column.column_position === position);
        if (column?.value) {
          row.push(column.value);
        } else {
          row.push("");
        }
        if (column) {
          headerColumnPoisitionMap[position] = `${column.type.toLowerCase()}[${column.name.toLowerCase()}]`;
        }
      }
      table.push(row);
    }
    table.unshift(["source name", ...columnPositions.map((position) => headerColumnPoisitionMap[position])]);
    return table;
  }

  convertToTSV(): string {
    const table = this.composeTable();
    return table.map((row) => row.join("\t")).join("\n");
  }
}
