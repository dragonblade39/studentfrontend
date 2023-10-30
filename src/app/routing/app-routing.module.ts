import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from '../components/student-list/student-list.component';
import { StudentAddComponent } from '../components/student-add/student-add.component';
import { StudentDetailsComponent } from '../components/student-details/student-details.component';

const routes: Routes = [
  {
    path: '',
    component: StudentListComponent,
  },
  { path: 'add', component: StudentAddComponent },
  { path: 'details/:id', component: StudentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
