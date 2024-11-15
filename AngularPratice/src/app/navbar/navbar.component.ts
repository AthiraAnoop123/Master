import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule ,MatIconModule]  ,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router:Router)
  {

  }
  homebtn()
  {
    this.router.navigate(['/Login']);  // Navigate to the login route
  }
  regbtn()
  {
    this.router.navigate(['/Register']);  // Navigate to the login route
  }
  listview()
  {
    
    this.router.navigate(['/ListView']);  // Navigate to the login route
  }
}
