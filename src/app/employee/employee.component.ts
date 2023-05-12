import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  empList: any = ['Employee 1', 'Employee 2', 'Employee 3', 'Employee 4','Employee 1', 'Employee 2', 'Employee 3', 'Employee 4'];
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}
  openDialog(): void {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '500px',
      height: '600px',
    });
  }
}
