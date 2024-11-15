import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { RegisterStudentDetailsComponent } from './register-student-details/register-student-details.component';
import { DeptlistComponent } from './deptlist/deptlist.component';

export const routes: Routes = [
    {
        path:"Login",
        component:LoginComponent
    },
    {
        path:"Register",
        component:RegisterStudentDetailsComponent
    },
    {
        path:"ListView",
        component:DeptlistComponent
    }
];
