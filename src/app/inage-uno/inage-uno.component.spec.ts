import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InageUnoComponent } from './inage-uno.component';

describe('InageUnoComponent', () => {
  let component: InageUnoComponent;
  let fixture: ComponentFixture<InageUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InageUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InageUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
