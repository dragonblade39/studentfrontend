import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetstudentsService } from 'src/app/services/getstudents.service';
import { Student } from 'src/models/student.model';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent {
  id: number;
  student: Student;
  constructor(
    private route: ActivatedRoute,
    private apiservice: GetstudentsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.apiservice.getSingleStudent(this.id).subscribe((res) => {
      this.student = res;
    });
  }
}
