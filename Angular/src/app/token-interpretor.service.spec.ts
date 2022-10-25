import { TestBed } from '@angular/core/testing';

import { TokenInterpretorService } from './token-interpretor.service';

describe('TokenInterpretorService', () => {
  let service: TokenInterpretorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInterpretorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
