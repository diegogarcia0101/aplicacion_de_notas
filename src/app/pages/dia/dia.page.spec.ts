import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiaPage } from './dia.page';

describe('DiaPage', () => {
  let component: DiaPage;
  let fixture: ComponentFixture<DiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
