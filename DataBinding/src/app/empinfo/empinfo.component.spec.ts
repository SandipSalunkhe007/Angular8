import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpinfoComponent } from './empinfo.component';

describe('EmpinfoComponent', () => {
  let component: EmpinfoComponent;
  let fixture: ComponentFixture<EmpinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
