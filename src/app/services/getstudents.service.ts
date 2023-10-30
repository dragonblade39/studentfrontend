import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, defaultIfEmpty } from 'rxjs/operators'; // Import the map and defaultIfEmpty operators
import { Student } from '../.././models/student.model';

@Injectable({
  providedIn: 'root',
})
export class GetstudentsService {
  constructor(private _http: HttpClient) {}
  apiUrl = 'http://localhost:8080/';

  // Get all data
  getAllData(): Observable<Student[]> {
    return this._http
      .get<Student[]>('http://localhost:8080/getAllStudent', {
        observe: 'response',
      })
      .pipe(
        map((response) => response.body || []) // Use defaultIfEmpty to provide an empty array
      );
  }

  getSingleStudent(id: number): Observable<any> {
    console.log(id);
    return this._http.get(`http://localhost:8080/getById/${id}`);
  }
}
