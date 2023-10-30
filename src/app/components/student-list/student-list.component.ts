import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetstudentsService } from 'src/app/services/getstudents.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent {
  // students = [
  //   {
  //     id: 1,
  //     name: 'Chethan N V',
  //     department: 'Computer Science',
  //     phonenumber: '8197057594',
  //   },
  //   {
  //     id: 2,
  //     name: 'Sadineni Tejaswi',
  //     department: 'Computer Science',
  //     phonenumber: '6303456027',
  //   },
  //   {
  //     id: 3,
  //     name: 'Likhitha',
  //     department: 'Doctor',
  //     phonenumber: '9036132831',
  //   },
  // ];

  students: any;
  constructor(public apiservice: GetstudentsService, private router: Router) {}
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.apiservice.getAllData().subscribe(
      (res) => {
        this.students = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  studentDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}
