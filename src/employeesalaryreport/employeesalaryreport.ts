import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../app/services/employee';

@Component({
  selector: 'app-employeesalaryreport',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employeesalaryreport.html',
  styleUrl: './employeesalaryreport.scss'
})
export class Employeesalaryreport {

  employees: any[] = [];
  department = 'IT';

  constructor(private employeeService: Employee) {}

  search() {
    this.employeeService
    .getEmployee(this.department)
    .subscribe({
      next:(data:any) =>{
        this.employees = data;
        console.log(data);
      },
      error : (err) =>{
        console.error(err);
      }
    })
  }
}