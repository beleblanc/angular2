/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { BusinessService } from './business.service';
import {AngularFire, FirebaseListObservable} from 'angularfire2'

describe('Business Service', () => {
  beforeEachProviders(() => [BusinessService]);

  it('should ...',
      inject([BusinessService], (service: BusinessService) => {
    expect(service).toBeTruthy();
  }));
});
