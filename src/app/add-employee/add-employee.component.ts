import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  addEmpForm!: FormGroup;

  ngOnInit(): void {
    this.addEmpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      technologies: new FormControl('', Validators.required),
    });
  }
  addEmployee() {
    console.log('employee save clicked');
    console.log(this.addEmpForm);
  }
}
