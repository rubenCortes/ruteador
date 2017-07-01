/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Auxiliar1Component } from './auxiliar1.component';

describe('Auxiliar1Component', () => {
  let component: Auxiliar1Component;
  let fixture: ComponentFixture<Auxiliar1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auxiliar1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auxiliar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
