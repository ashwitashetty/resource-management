import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  // empList: any ;
  filteredString: string = '';
  empList: any = ['ashu', 'shetty', 'tanvi', 'gowri', 'noor', 'pooja'];
  empDetail: boolean = false;
  constructor(
    public dialog: MatDialog,
    public employeeService: EmployeeService
  ) {}
  ngOnInit(): void {
    // this.allEmployeeList();
    console.log('iam emp list', this.empList);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '500px',
      height: '600px',
    });
  }
  clicked() {
    console.log('event tri');
    // this.empDetail=!this.empDetail;
    this.empDetail = true;
  }

  // allEmployeeList() {
  //   this.employeeService.getAllEmployeeDetails().subscribe((response) => {
  //     console.log('response', response);
  //     this.empList = response;
  //   });
  // }
}
