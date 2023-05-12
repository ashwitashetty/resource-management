import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
  addProjectForm!: FormGroup;

  ngOnInit(): void {
    this.addProjectForm = new FormGroup({
      name: new FormControl('', Validators.required),
      technologies: new FormControl('',Validators.required),
      date: new FormControl('',Validators.required),
      employee: new FormControl('',Validators.required),
    });
  }
  addProject() {
    console.log('project save clicked');
    console.log(this.addProjectForm.value);
  }
}
