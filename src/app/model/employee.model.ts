// app/dashboard/employee/employee.model.ts

export class Employee {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  basicSalary: number;
  status: string;
  group: string;
  description: Date;

  constructor(
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    birthDate: Date,
    basicSalary: number,
    status: string,
    group: string,
    description: Date
  ) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthDate = birthDate;
    this.basicSalary = basicSalary;
    this.status = status;
    this.group = group;
    this.description = description;
  }
}
