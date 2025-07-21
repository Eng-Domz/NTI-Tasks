import { Component, Input } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-data-user',
  standalone: false,
  templateUrl: './data-user.component.html',
  styleUrl: './data-user.component.css'
})
export class DataUserComponent {
  @Input() userId: number = 0;
  constructor(private userService: UserService) {}
  
  getUserName(userId: number): string {
    return this.userService.getUserNameById(userId);
  }
  getImage(userId: number): string {
    return this.userService.getUserImageById(userId);
  }
}
