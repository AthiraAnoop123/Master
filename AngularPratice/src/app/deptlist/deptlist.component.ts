import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import HttpClientModule and HttpClient
  // Import HttpClientModule
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table'; // Import MatTableDataSource
import { IdepartmentRole } from '../shared/department';
import { HttpClient, provideHttpClient } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deptlist',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './deptlist.component.html',
  styleUrls: ['./deptlist.component.css'] // Correct the property name
})
export class DeptlistComponent implements OnInit {
  displayedColumns: string[] = ['deptRoleListId', 'description', 'preDefined', 'isActive'];
  dataSource = new MatTableDataSource<IdepartmentRole>(); // Ensure MatTableDataSource is used

  http=inject(HttpClient)


  ngOnInit() {
    const API_URL = 'https://localhost:7051/api/Admin/GetDepartmentRoleLists'; // Replace with your API endpoint
    this.http.get<{ isSuccess: boolean; data: IdepartmentRole[] }>(API_URL).subscribe({
      next: (response) => {
        
        if (response.isSuccess && response.data) {
          this.dataSource.data = response.data;
        }
      },
      error: (error) => {
        console.error('Failed to fetch department roles:', error);
      },
    });
  }
}
