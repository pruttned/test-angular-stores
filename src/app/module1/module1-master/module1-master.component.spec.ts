import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1MasterComponent } from './module1-master.component';

describe('Module1MasterComponent', () => {
  let component: Module1MasterComponent;
  let fixture: ComponentFixture<Module1MasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1MasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1MasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
