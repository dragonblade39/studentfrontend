import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/student.model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
})
export class StudentAddComponent {
  errormsg: any;
  successmsg: any;
  constructor(private apiservice: StudentService) {}
  studentForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    department: new FormControl('', [Validators.required]),
    phonenumber: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
  });

  get name() {
    return this.studentForm.get('name');
  }

  get department() {
    return this.studentForm.get('department');
  }

  get phonenumber() {
    return this.studentForm.get('phonenumber');
  }

  onSubmit() {
    if (!this.studentForm.valid) {
      return;
    }
    if (this.studentForm.valid) {
      this.apiservice.createNewUser(this.studentForm.value).subscribe((res) => {
        console.log(res, 'data submitted');
        this.studentForm.reset();
        this.successmsg = res.message;
      });
    } else {
      this.errormsg = 'All field required.';
    }
  }
}
