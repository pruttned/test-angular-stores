import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2MasterComponent } from './module2-master.component';

describe('Module2MasterComponent', () => {
  let component: Module2MasterComponent;
  let fixture: ComponentFixture<Module2MasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module2MasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2MasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
