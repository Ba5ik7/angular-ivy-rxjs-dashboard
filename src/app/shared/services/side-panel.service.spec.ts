import { SidePanelService } from './side-panel.service';
import { TestBed } from '@angular/core/testing';

describe('SidePanelService', () => {
  let service: SidePanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidePanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
