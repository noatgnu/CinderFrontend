import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { CurtainListService } from './curtain-list.service';

describe('CurtainListService', () => {
  let service: CurtainListService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(CurtainListService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch and sort categories', () => {
    let result: string[] = [];
    service.getCategories().subscribe(cats => (result = cats));
    const req = httpMock.expectOne('https://curtain-backend.omics.quest/data_filter_list/get_all_category/');
    req.flush(['Oncology', 'Alzheimer', 'Cancer']);
    expect(result).toEqual(['Alzheimer', 'Cancer', 'Oncology']);
  });

  it('should return empty array for short search term', () => {
    let result: any[] = [{ id: 1 }];
    service.searchByName('a').subscribe(r => (result = r));
    expect(result).toEqual([]);
    httpMock.expectNone(/data_filter_list/);
  });

  it('should search by name', () => {
    let result: any[] = [];
    service.searchByName('brca').subscribe(r => (result = r));
    const req = httpMock.expectOne(r => r.url.includes('name=brca'));
    req.flush({ results: [{ id: 1, name: 'BRCA genes', data: 'BRCA1\nBRCA2', default: false }] });
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('BRCA genes');
  });

  it('should parse proteins from newline-separated string', () => {
    expect(service.parseProteins('BRCA1\nTP53\nEGFR')).toEqual(['BRCA1', 'TP53', 'EGFR']);
  });

  it('should parse proteins from comma-separated string', () => {
    expect(service.parseProteins('BRCA1,TP53,EGFR')).toEqual(['BRCA1', 'TP53', 'EGFR']);
  });

  it('should count proteins correctly', () => {
    expect(service.getProteinCount('BRCA1\nTP53\nEGFR')).toBe(3);
    expect(service.getProteinCount('')).toBe(0);
  });
});
