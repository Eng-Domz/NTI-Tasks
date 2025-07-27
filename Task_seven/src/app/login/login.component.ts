import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;
  loginError: string = '';
  
  // Variables for two-way binding
  username: string = '';
  password: string = '';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    // Clear previous messages
    this.loginError = '';

    // Mark all fields as touched to show validation errors
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      const loggedUser = this.userService.login(this.username, this.password);
      if(loggedUser){
        this.userService.setLoggedUser(loggedUser);
        console.log('Login successful');
        this.router.navigate(['/']);
      }else{
        this.loginError = 'Invalid username or password. Please try again.';
      }
    } else {
      this.loginError = 'Please fill in all required fields correctly.';
    }
  }
}
