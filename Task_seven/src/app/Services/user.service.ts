import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Adham Ahmed', image: '/adham.jpg' },
    { id: 2, name: 'Ahmed Ramy', image: '/ahmed.jpg' },
    { id: 3, name: 'Hazem Hassan', image: '/hazem.jpg' },
    { id: 4, name: 'Mohamed Ali', image: '/mohamed.jpg' }
  ];

  getUserNameById(userId: number): string {
    const user = this.users.find(user => user.id === userId);
    return user ? user.name : 'Unknown User';
  }
  
  getUserImageById(userId: number): string {
    const user = this.users.find(user => user.id === userId);
    return user ? user.image : '';
  }
} 