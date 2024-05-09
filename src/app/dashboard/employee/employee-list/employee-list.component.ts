import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  standalone: true,
  imports: [MatTableModule],
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Generate 100 dummy employee entries
    for (let i = 0; i < 100; i++) {
      const dummyEmployee = {
        username: `johndoe${i}`,
        firstName: 'John',
        lastName: 'Doe',
        email: `johndoe${i}@example.com`,
        birthDate: '1990-01-15',
        basicSalary: 55000,
        status: 'Active',
        group: 'Engineering',
        description: '2023-01-15',
      };
      this.employees.push(dummyEmployee);
    }
  }


  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'email', 'birthDate', 'basicSalary', 'status', 'group', 'description'];
  dataSource = this.employees;
}
