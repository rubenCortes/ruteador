/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Auxiliar2Component } from './auxiliar2.component';

describe('Auxiliar2Component', () => {
  let component: Auxiliar2Component;
  let fixture: ComponentFixture<Auxiliar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auxiliar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auxiliar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
