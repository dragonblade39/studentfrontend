import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private _http: HttpClient) {}
  apiUrl = 'https://studentdatabase-production-a54b.up.railway.app/';

  createNewUser(addStudent: any): Observable<any> {
    return this._http.post(
      'https://studentdatabase-production-a54b.up.railway.app/addStudent',
      addStudent
    );
  }
}
