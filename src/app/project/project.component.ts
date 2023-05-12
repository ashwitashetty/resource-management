import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectComponent } from '../add-project/add-project.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projectList: any = [
    {
      projectname: 'project 1',
      projectStatus: 'yet to start',
    },
    {
      projectname: 'project 1',
      projectStatus: 'yet to start',
    },
    {
      projectname: 'project 1',
      projectStatus: 'yet to start',
    },
    {
      projectname: 'project 1',
      projectStatus: 'yet to start',
    },
    {
      projectname: 'project 1',
      projectStatus: 'yet to start',
    },
  ];
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}
  openDialog(): void {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      width: '500px',
      height: '600px',
    });
  }
}
