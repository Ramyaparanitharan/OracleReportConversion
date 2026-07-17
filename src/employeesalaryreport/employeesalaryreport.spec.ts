import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeesalaryreport } from './employeesalaryreport';

describe('Employeesalaryreport', () => {
  let component: Employeesalaryreport;
  let fixture: ComponentFixture<Employeesalaryreport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeesalaryreport],
    }).compileComponents();

    fixture = TestBed.createComponent(Employeesalaryreport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
