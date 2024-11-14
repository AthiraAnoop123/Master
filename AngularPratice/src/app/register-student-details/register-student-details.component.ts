import {ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';  // Ensure this import
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register-student-details',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule,FormsModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatSelectModule,MatOptionModule],
  templateUrl: './register-student-details.component.html',
  styleUrl: './register-student-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterStudentDetailsComponent {
  cgpaOptions: number[] = [4.0, 3.9, 3.8, 3.7, 3.6];  // Define CGPA options
  selectedCgpa: number | null = null;  // Define the selected CGPA

  RegisterClick(values:any){
    alert("hi");
  }
}
