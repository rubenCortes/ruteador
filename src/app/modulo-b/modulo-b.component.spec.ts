/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModuloBComponent } from './modulo-b.component';

describe('ModuloBComponent', () => {
  let component: ModuloBComponent;
  let fixture: ComponentFixture<ModuloBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
