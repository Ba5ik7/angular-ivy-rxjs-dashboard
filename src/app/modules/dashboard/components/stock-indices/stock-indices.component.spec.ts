import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { StockIndicesComponent } from './stock-indices.component';

describe('StockIndicesComponent', () => {
  let component: StockIndicesComponent;
  let fixture: ComponentFixture<StockIndicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockIndicesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockIndicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
