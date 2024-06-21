import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {ChunkUpload} from "./upload-file/chunk-upload";
import {Project, ProjectQuery} from "./project/project";
import {AnalysisGroup, AnalysisGroupQuery, CurtainData} from "./analysis-group/analysis-group";
import {ProjectFile} from "./project-file";
import {SampleAnnotation} from "./sample-annotation";
import {map} from "rxjs";
import {ComparisonMatrix} from "./comparison-matrix";
import {SearchResult, SearchResultQuery, SearchSession, SearchSessionQuery} from "./search-session";
import {Projects} from "@angular/cli/lib/config/workspace-schema";
import {Species, SpeciesQuery} from "./species";



@Injectable({
  providedIn: 'root'
})
export class WebService {
  cinderInstanceID: string = crypto.randomUUID()
  baseURL: string = environment.baseURL
  searchSessionID: string|null = null

  constructor(private http: HttpClient) { }

  uploadDataChunk(url: string = "", chunk: File, filename: string, contentRange: string) {
    const form = new FormData()
    form.append('file', chunk)
    form.append('filename', filename)
    let headers = new HttpHeaders()
    headers = headers.append('Content-Range', contentRange)
    //headers.append('Content-Disposition', `attachment; filename=${filename}`)
    console.log(headers)
    if (url !== "") {
      if (url.startsWith("http://") && !url.startsWith("http://localhost")) {
        url = url.replace("http://", "https://")
      }
      return this.http.put<ChunkUpload>(
        url,
        form,
        {responseType: 'json', observe: 'body', headers: headers}
      )

    } else {
      return this.http.put<ChunkUpload>(
        `${this.baseURL}/api/chunked_upload/`,
        form,
        {responseType: 'json', observe: 'body', headers: headers}
      )

    }
  }

  uploadDataChunkComplete(url: string = "", md5: string, file?: File, filename?: string) {
    const form = new FormData()
    form.append('sha256', md5)
    if (url.startsWith("http://") && !url.startsWith("http://localhost")) {
      url = url.replace("http://", "https://")
    }
    if (file && filename) {
      form.append('file', file)
      form.append('filename', filename)
      return this.http.post<ChunkUpload>(
        `${this.baseURL}/api/chunked_upload/`,
        form,
        {responseType: 'json', observe: 'body'}
      )
    } else {
      return this.http.post<ChunkUpload>(
        url,
        form,
        {responseType: 'json', observe: 'body'}
      )
    }
  }

  bindUploadedFile(analysis_group_id: number, file_type: string, file_category: string, file_name: string, upload_id: string) {
    return this.http.post<any>(
      `${this.baseURL}/api/project_files/bind_uploaded_file/`,
      {file_name: file_name, analysis_group: analysis_group_id, file_type: file_type, file_category: file_category, upload_id: upload_id},
      {responseType: 'json', observe: 'body'}
    ).pipe<ProjectFile>(
      map((data) => {
        if (data.extra_data) {
          data.extra_data = JSON.parse(data.extra_data)
        }
        return data
      })
    )
  }

  getProjects(url?: string, limit: number = 10, offset: number = 0, search?: string) {
    if (url) {
      return this.http.get<ProjectQuery>(
        url,
        {responseType: 'json', observe: 'body'}
      )
    }
    let params = new HttpParams()
    if (limit) {
      params = params.append('limit', limit.toString())
    }
    if (offset) {
      params = params.append('offset', offset.toString())
    }
    if (search && search !== "") {
      params = params.append('search', search)
    }
    params = params.append('ordering', '-created_at')
    return this.http.get<ProjectQuery>(
      `${this.baseURL}/api/projects/`,
      {responseType: 'json', observe: 'body', params: params}
    )
  }

  updateProject(project_id: number, name: string, description: string, species: number|null = null) {
    return this.http.put<Project>(
      `${this.baseURL}/api/projects/${project_id}/`,
      {name: name, description: description, species: species},
      {responseType: 'json', observe: 'body'}
    )
  }

  deleteProject(id: number) {
    return this.http.delete(
      `${this.baseURL}/api/projects/${id}/`,
      {responseType: 'json', observe: 'body'}
    )
  }

  createProject(name: string, description: string) {
    return this.http.post<Project>(
      `${this.baseURL}/api/projects/`,
      {name: name, description: description},
      {responseType: 'json', observe: 'body'}
    )
  }

  getAnalysisGroups(url?: string, limit: number = 10, offset: number = 0, search?: string, project?: number) {
    if (url) {
      return this.http.get<AnalysisGroupQuery>(
        url,
        {responseType: 'json', observe: 'body'}
      )
    }
    let params = new HttpParams()
    if (limit) {
      params = params.append('limit', limit.toString())
    }
    if (offset) {
      params = params.append('offset', offset.toString())
    }
    if (search && search !== "") {
      params = params.append('search', search)
    }
    if (project) {
      params = params.append('project', project.toString())
    }
    params = params.append('ordering', '-created_at')
    return this.http.get<AnalysisGroupQuery>(
      `${this.baseURL}/api/analysis_groups/`,
      {responseType: 'json', observe: 'body', params: params}
    )
  }

  createAnalysisGroup(name: string, description: string, project: number, analysis_group_type: string) {
    return this.http.post<AnalysisGroup>(
      `${this.baseURL}/api/analysis_groups/`,
      {name: name, description: description, project: project, analysis_group_type: analysis_group_type},
      {responseType: 'json', observe: 'body'}
    )
  }

  getProject(id: number) {
    return this.http.get<Project>(
      `${this.baseURL}/api/projects/${id}/`,
      {responseType: 'json', observe: 'body'}
    )
  }

  getAnalysisGroup(id: number) {
    return this.http.get<AnalysisGroup>(
      `${this.baseURL}/api/analysis_groups/${id}/`,
      {responseType: 'json', observe: 'body'}
    )
  }

  updateAnalysisGroup(id: number, name: string, description: string, curtain_link: string|null = null, session_id: string) {
    const payload: any = {name: name, description: description}
    if (curtain_link) {
      payload["curtain_link"] = curtain_link
    }
    if (session_id) {
      payload["session_id"] = session_id
    }
    return this.http.put<AnalysisGroup>(
      `${this.baseURL}/api/analysis_groups/${id}/`,
      payload,
      {responseType: 'json', observe: 'body'}
    )
  }

  refreshCurtainLink(analysis_group_id: number, session_id: string) {
    return this.http.post<AnalysisGroup>(
      `${this.baseURL}/api/analysis_groups/${analysis_group_id}/refresh_curtain_data/`,
      {session_id: session_id},
      {responseType: 'json', observe: 'body'}
    )
  }

  getCurtainLinkData(analysis_group_id: number) {
    return this.http.get<CurtainData>(
      `${this.baseURL}/api/analysis_groups/${analysis_group_id}/get_curtain_data/`,
      {responseType: 'json', observe: 'body'}
    )
  }

  getAnalysisGroupFiles(analysis_group_id: number) {
    return this.http.get<any[]>(
      `${this.baseURL}/api/analysis_groups/${analysis_group_id}/files/`,
      {responseType: 'json', observe: 'body'}
    ).pipe<ProjectFile[]>(
      map((data) => {
        return data.map((file) => {
          if (file.extra_data) {
            file.extra_data = JSON.parse(file.extra_data)
          }
          return file
        })
      })
    )
  }

  getProjectFileColumns(file_id: number) {
    return this.http.get<string[]>(
      `${this.baseURL}/api/project_files/${file_id}/get_columns/`,
      {responseType: 'json', observe: 'body'}
    )
  }

  createSampleAnnotation(analysis_group_id: number, name: string, annotations: {Sample: string, Condition: string}[], file_id: number) {
    return this.http.post<any>(
      `${this.baseURL}/api/sample_annotations/`,
      {analysis_group: analysis_group_id, name: name, annotations: annotations, file: file_id},
    ).pipe<SampleAnnotation>(
      map((data) => {
        data.annotations = JSON.parse(data.annotations)
        return data
      })
    )
  }

  getSampleAnnotation(annotation_id: number) {
    return this.http.get<any>(
      `${this.baseURL}/api/sample_annotations/${annotation_id}/`,
      {responseType: 'json', observe: 'body'}
    ).pipe<SampleAnnotation>(
      map((data) => {
        data.annotations = JSON.parse(data.annotations)
        return data
      })
    )
  }

  updateSampleAnnotation(annotation_id: number, name: string, annotations: {Sample: string, Condition: string}[]) {
    return this.http.put<any>(
      `${this.baseURL}/api/sample_annotations/${annotation_id}/`,
      {name: name, annotations: annotations},
      {responseType: 'json', observe: 'body'}
    ).pipe<SampleAnnotation>(
      map((data) => {
        data.annotations = JSON.parse(data.annotations)
        return data
      })
    )
  }

  getProjectFileSampleAnnotations(file_id: number) {
    return this.http.get<any>(
      `${this.baseURL}/api/project_files/${file_id}/sample_annotations/`,
      {responseType: 'json', observe: 'body'}
    ).pipe<SampleAnnotation>(
      map((data) => {
        data.annotations = JSON.parse(data.annotations)
        return data
      })
    )
  }

  createComparisonMatrix(analysis_group_id: number, name: string, matrix: any, project_file_id: number) {
    return this.http.post<any>(
      `${this.baseURL}/api/comparison_matrices/`,
      {name: name, matrix: matrix, analysis_group: analysis_group_id, file: project_file_id},
      {responseType: 'json', observe: 'body'}
    ).pipe<ComparisonMatrix>(
      map((data) => {
        data.matrix = JSON.parse(data.matrix)
        return data
      })
    )
  }

  updateComparisonMatrix(matrix_id: number, name: string, matrix: any) {
    return this.http.put<any>(
      `${this.baseURL}/api/comparison_matrices/${matrix_id}/`,
      {name: name, matrix: matrix},
      {responseType: 'json', observe: 'body'}
    ).pipe<ComparisonMatrix>(
      map((data) => {
        data.matrix = JSON.parse(data.matrix)
        return data
      })
    )
  }

  getProjectFileComparisonMatrix(file_id: number) {
    return this.http.get<any>(
      `${this.baseURL}/api/project_files/${file_id}/comparison_matrices/`,
      {responseType: 'json', observe: 'body'}
    ).pipe<ComparisonMatrix>(
      map((data) => {
        data.matrix = JSON.parse(data.matrix)
        return data
      })
    )
  }

  deleteAnalysisGroup(id: number) {
    return this.http.delete(
      `${this.baseURL}/api/analysis_groups/${id}/`,
      {responseType: 'json', observe: 'body'}
    )
  }
  createSearch(
    analysis_groups: number[],
    search_term: string,
    session_id: string|null = null,
    fc_cutoff: number = 0.6,
    p_value_cutoff: number = 1.31,
    search_mode: "full"|"pi"|"gene"|"uniprot" = "full"
  ) {
    let payload: any = {analysis_groups: analysis_groups, search_term: search_term}
    if (session_id) {
      payload["session_id"] = session_id
    }
    if (fc_cutoff) {
      payload["fc_cutoff"] = fc_cutoff
    }
    if (p_value_cutoff) {
      payload["p_value_cutoff"] = p_value_cutoff
    }
    if (search_mode) {
      payload["search_mode"] = search_mode
    }
    return this.http.post<SearchSession>(
      `${this.baseURL}/api/search/`,
      payload,
      {responseType: 'json', observe: 'body'}
    )
  }

  getSearchSessionID() {
    return this.http.get<string>(
      `${this.baseURL}/api/search/session_id/`,
      {
        responseType: 'json',
        observe: 'body'
      }
    )
  }

  getSearchSession(search_id: number) {
    return this.http.get<SearchSession>(
      `${this.baseURL}/api/search/${search_id}/`,
      {responseType: 'json', observe: 'body'}
    )
  }

  getSearchSessions(url?: string, limit: number = 10, offset: number = 0, search_term?: string, userOwnedOnly: boolean = false, session_id: string|null = null) {
    if (url) {
      return this.http.get<SearchSessionQuery>(
        url,
        {responseType: 'json', observe: 'body'}
      )
    }
    let params = new HttpParams()
    if (limit) {
      params = params.append('limit', limit.toString())
    }
    if (offset) {
      params = params.append('offset', offset.toString())
    }
    if (search_term && search_term !== "") {
      params = params.append('search', search_term)
    }
    if (userOwnedOnly) {
      params = params.append('user_owned_only', 'true')
    }
    if (session_id) {
      params = params.append('session_id', session_id)
    }
    params = params.append('ordering', '-created_at')
    return this.http.get<SearchSessionQuery>(
      `${this.baseURL}/api/search/`,
      {responseType: 'json', observe: 'body', params: params}
    )
  }

  getSearchResults(search_id: number, limit: number = 10, offset: number = 0, file_category: string = "df", sort: string = "", direction: string = "desc", search_term: string = "") {
    let params = new HttpParams()
    if (limit) {
      params = params.append('limit', limit.toString())
    }
    if (offset) {
      params = params.append('offset', offset.toString())
    }
    if (sort && sort !== "") {
      if (direction && direction !== "") {
        if (direction === "asc") {
          params = params.append('ordering', sort)
        } else if (direction === "desc") {
          params = params.append('ordering', `-${sort}`)
        }
      }
    }
    if (search_term && search_term !== "") {
      params = params.append('search', search_term)
    }

    params = params.append('file_category', file_category)
    params = params.append('search_id', search_id.toString())
    //params = params.append('ordering', '-created_at')
    return this.http.get<SearchResultQuery>(
      `${this.baseURL}/api/search_results/`,
      {responseType: 'json', observe: 'body', params: params}
    )
  }

  getSearchResultRelated(search_result_id: number, file_category: string = "df", primary_id: string|null = null) {
    let params = new HttpParams()
    params = params.append('file_category', file_category)
    if (primary_id) {
      params = params.append('primary_id', primary_id)
    }
    return this.http.get<SearchResult[]>(`${this.baseURL}/api/search_results/${search_result_id}/get_related/`, {responseType: 'json', observe: 'body', params: params})
  }

  updateProjectFileExtraData(file_id: number, extra_data: any) {
    return this.http.put<any>(
      `${this.baseURL}/api/project_files/${file_id}/`,
      {extra_data: extra_data},
      {responseType: 'json', observe: 'body'}
    ).pipe<ProjectFile>(
      map((data) => {
        if (data.extra_data) {
          data.extra_data = JSON.parse(data.extra_data)
        }
        return data
      })
    )
  }

  getProjectCount() {
    return this.http.get<{count: number}>(
      `${this.baseURL}/api/projects/get_count/`,
      {responseType: 'json', observe: 'body'}
    )
  }

  getAnalysisGroupCount() {
    return this.http.get<{count: number}>(
      `${this.baseURL}/api/analysis_groups/get_count/`,
      {responseType: 'json', observe: 'body'}
    )
  }

  deleteSearchSession(id: number) {
    return this.http.delete(
      `${this.baseURL}/api/search/${id}/`,
      {responseType: 'json', observe: 'body'}
    )
  }

  getAnalysisGroupsFromProjects(projects: Project[]) {
    return this.http.post<AnalysisGroup[]>(
      `${this.baseURL}/api/search/get_analysis_groups_from_projects/`,
      {projects: projects.map((p) => p.id)},
    )
  }

  getSpecies(url?: string, limit: number = 10, offset: number = 0, search?: string) {
    if (url) {
      return this.http.get<SpeciesQuery>(url, {responseType: 'json', observe: 'body'})
    }
    let params = new HttpParams()
    if (limit) {
      params = params.append('limit', limit.toString())
    }
    if (offset) {
      params = params.append('offset', offset.toString())
    }
    if (search && search !== "") {
      params = params.append('search', search)
    }
    params = params.append('ordering', 'official_name')
    return this.http.get<SpeciesQuery>(
      `${this.baseURL}/api/species/`,
      {responseType: 'json', observe: 'body', params: params}
    )
  }

  getSpeciesByID(id: number) {
    return this.http.get<Species>(
      `${this.baseURL}/api/species/${id}/`,
      {responseType: 'json', observe: 'body'}
    )
  }
}
