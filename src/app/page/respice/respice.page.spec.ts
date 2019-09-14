import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespicePage } from './respice.page';

describe('RespicePage', () => {
  let component: RespicePage;
  let fixture: ComponentFixture<RespicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
