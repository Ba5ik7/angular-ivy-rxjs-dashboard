import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { MotdComponent } from './motd.component';

describe('MotdComponent', () => {
  let component: MotdComponent;
  let fixture: ComponentFixture<MotdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MotdComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
