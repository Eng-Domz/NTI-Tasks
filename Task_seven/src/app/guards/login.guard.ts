import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    const loggedUser = this.userService.getLoggedUser();
    
    if (loggedUser) {
      this.router.navigate(['/']); 
      return false; 
    } else {
      return true; 
    }
  }
} 