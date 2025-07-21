import { Injectable } from '@angular/core';
import { Card } from '../Models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cards: Card[] = [
    {
        title: 'MacBook Pro',
        body: 'Latest MacBook Pro with amazing performance',
        image: '/macbook.jpg',
        type: 'laptop',
        id:1,
        userId:1
    },
    {
        title: 'IPhone 16',
        body: 'The newest iPhone with cutting-edge features',
        image: '/iphone.jpg',
        type: 'phone',
        id:2,
        userId:1
    },
    {
        title: 'Apple Watch',
        body: 'Premium smartwatch for health and fitness',
        image: '/watch2.jpg',
        type: 'watch',
        id:3,
        userId:2
    },
    {
        title: 'Airpods Max',
        body: 'The best Airpods for music lovers',
        image: '/maxs.jpg',
        type: 'airpods',
        id:4,
        userId:2
    },
    {
        title: 'Hp Laptop',
        body: 'The best Hp Laptop for gaming',
        image: '/hp.jpg',
        type: 'laptop',
        id:5,
        userId:3
    },
    {
        title: 'Samsung S21',
        body: 'The fastest Samsung phone',
        image: '/s21.jpg',
        type: 'phone',
        id:6,
        userId:4
    }
  ];
  getCards(): Card[] {
    return this.cards;
  }
  deleteCard(id: number): Card[] {
    return this.cards.filter(card => card.id !== id);
  }
  addCard(card: Card): void {
    this.cards.push(card);
  }
  updateCard(card: Card): void {
    const index = this.cards.findIndex(c => c.id === card.id);
    this.cards[index] = card;
}
}
