/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModAC1Component } from './mod-a-c1.component';

describe('ModAC1Component', () => {
  let component: ModAC1Component;
  let fixture: ComponentFixture<ModAC1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModAC1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModAC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
