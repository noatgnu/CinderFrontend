import { TestBed } from '@angular/core/testing';

import { WebBrowserService } from './web-browser.service';

describe('WebBrowserService', () => {
  let service: WebBrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebBrowserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
