/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModAC2Component } from './mod-a-c2.component';

describe('ModAC2Component', () => {
  let component: ModAC2Component;
  let fixture: ComponentFixture<ModAC2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModAC2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModAC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
