import { TestBed, inject } from '@angular/core/testing';

import { WeatherApiService } from "./WeatherApiService";

describe('WeatherApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherApiService]
    });
  });

  it('should be created', inject([WeatherApiService], (service: WeatherApiService) => {
    expect(service).toBeTruthy();
  }));
});
