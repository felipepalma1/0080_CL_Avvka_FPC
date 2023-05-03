import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatAnalysisComponent } from './threat-analysis.component';

describe('ThreatAnalysisComponent', () => {
  let component: ThreatAnalysisComponent;
  let fixture: ComponentFixture<ThreatAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreatAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreatAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
