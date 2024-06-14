export interface ChunkUpload {
  id: string,
  url: string,
  file: string,
  filename: string,
  offset: number,
  created_at: Date,
  status: number,
  completed_at: Date|null,
  user: number,
}
