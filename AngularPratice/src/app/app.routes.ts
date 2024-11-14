import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { register } from 'module';
import { RegisterStudentDetailsComponent } from './register-student-details/register-student-details.component';

export const routes: Routes = [
    {
        path:"Login",
        component:LoginComponent
    },
    {
        path:"Register",
        component:RegisterStudentDetailsComponent
    }
];
