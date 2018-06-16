import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Gateway } from './gateway.service';

describe('Gateway', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
          HttpModule
      ],      
      providers: [Gateway]
    });
  });

  it('should be created', inject([Gateway], (service: Gateway) => {
    expect(service).toBeTruthy();
  }));
});
