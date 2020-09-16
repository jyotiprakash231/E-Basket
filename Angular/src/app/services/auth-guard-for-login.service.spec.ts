import { TestBed } from '@angular/core/testing';

import { AuthGuardForLoginService } from './auth-guard-for-login.service';

describe('AuthGuardForLoginService', () => {
  let service: AuthGuardForLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardForLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
