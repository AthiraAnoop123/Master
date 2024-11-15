import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register-student-details',
  standalone: true,
  providers: [], // Remove or customize `provideNativeDateAdapter` if needed
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
  
  ],
  templateUrl: './register-student-details.component.html',
  styleUrls: ['./register-student-details.component.css',], // Corrected property
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterStudentDetailsComponent {
  cgpaOptions: number[] = [4.0, 3.9, 3.8, 3.7, 3.6]; // Define CGPA options
  selectedCgpa: number | null = null; // Define the selected CGPA

  RegisterClick(values: any) {
    alert('hi');
  }
}
