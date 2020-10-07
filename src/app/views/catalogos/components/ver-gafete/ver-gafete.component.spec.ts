import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerGafeteComponent } from './ver-gafete.component';

describe('VerGafeteComponent', () => {
  let component: VerGafeteComponent;
  let fixture: ComponentFixture<VerGafeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerGafeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerGafeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
