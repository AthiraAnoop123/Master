import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiUrl = 'https://api.example.com/departments';  // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Method to fetch department data from API
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }
}
export interface Department {
  departmentId: number;
  departmentName: string;
}