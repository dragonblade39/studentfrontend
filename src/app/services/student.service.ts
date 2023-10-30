import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private _http: HttpClient) {}
  apiUrl = 'http://localhost:8080/';

  createNewUser(addStudent: any): Observable<any> {
    return this._http.post('http://localhost:8080/addStudent', addStudent);
  }
}
