/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModuloAComponent } from './modulo-a.component';

describe('ModuloAComponent', () => {
  let component: ModuloAComponent;
  let fixture: ComponentFixture<ModuloAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
