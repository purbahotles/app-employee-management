import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  users: any[] = [];
  displayedColumns = ['id', 'username', 'email', 'role', 'actions'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      response => {
        this.loadUsers();
      },
      error => {
        console.log(error);
      }
    );
  }

  editUser(id: number) {
    // Implement edit logic
  }
}
