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
  apiUrl = 'https://studentdatabase-production-6a49.up.railway.app/';

  // Get all data
  getAllData(): Observable<Student[]> {
    return this._http
      .get<Student[]>(
        'https://studentdatabase-production-6a49.up.railway.app/getAllStudent',
        {
          observe: 'response',
        }
      )
      .pipe(
        map((response) => response.body || []) // Use defaultIfEmpty to provide an empty array
      );
  }

  getSingleStudent(id: number): Observable<any> {
    console.log(id);
    return this._http.get(
      `https://studentdatabase-production-6a49.up.railway.app/getById/${id}`
    );
  }
}
