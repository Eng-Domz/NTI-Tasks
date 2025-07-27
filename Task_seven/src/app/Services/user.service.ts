import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'adham', image: '/adham.jpg', password: '123456' },
    { id: 2, name: 'ahmed', image: '/ahmed.jpg', password: '123456' },
    { id: 3, name: 'Hazem Hassan', image: '/hazem.jpg', password: '123456' },
    { id: 4, name: 'Mohamed Ali', image: '/mohamed.jpg', password: '123456' }
  ];

  getUserNameById(userId: number): string {
    const user = this.users.find(user => user.id === userId);
    return user ? user.name : 'Unknown User';
  }
  
  getUserImageById(userId: number): string {
    const user = this.users.find(user => user.id === userId);
    return user ? user.image : '';
  }

  login(userName:string,password:string):User|null{
    const user = this.users.find(user => user.name === userName && user.password === password);
    return user ? user : null;
  }

  loggedUser:User|null = null;
  
  constructor() {
    // Initialize logged user from localStorage on service creation
    this.loggedUser = this.getLoggedUser();
  }

  setLoggedUser(user:User){
    this.loggedUser = user;
    localStorage.setItem('user',JSON.stringify(user));
  }

  getLoggedUser():User|null{
    if (this.loggedUser) {
      return this.loggedUser;
    }
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } 

  logout(){
    localStorage.removeItem('user');
    this.loggedUser = null;
  }



} 