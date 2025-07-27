import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBarComponent {
  constructor(public userService:UserService,private router:Router){}
  
  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
  }
  
  isLoggedIn(): boolean {
    return this.userService.getLoggedUser() !== null;
  }
} 