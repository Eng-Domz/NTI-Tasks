import { Injectable } from '@angular/core';
import { Card } from '../Models/card.model';
import { Comment as CommentModel } from '../Models/comment.model';


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
        userId:1,
        comments: [],
        likes: 0
    },
    {
        title: 'IPhone 16',
        body: 'The newest iPhone with cutting-edge features',
        image: '/iphone.jpg',
        type: 'phone',
        id:2,
        userId:1,
        comments: [],
        likes: 0
    },
    {
        title: 'Apple Watch',
        body: 'Premium smartwatch for health and fitness',
        image: '/watch2.jpg',
        type: 'watch',
        id:3,
        userId:2,
        comments: [],
        likes: 0
    },
    {
        title: 'Airpods Max',
        body: 'The best Airpods for music lovers',
        image: '/maxs.jpg',
        type: 'airpods',
        id:4,
        userId:2,
        comments: [],
        likes: 0
    },
    {
        title: 'Hp Laptop',
        body: 'The best Hp Laptop for gaming',
        image: '/hp.jpg',
        type: 'laptop',
        id:5,
        userId:3,
        comments: [],
        likes: 0
    },
    {
        title: 'Samsung S21',
        body: 'The fastest Samsung phone',
        image: '/s21.jpg',
        type: 'phone',
        id:6,
        userId:4,
        comments: [],
        likes: 0
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
  showComments(cardId: number): CommentModel[] {
    const index = this.cards.findIndex(c => c.id === cardId);
    return this.cards[index].comments;
  }
  addComment(cardId: number, commentContent: string, userId: number): void {
    const index = this.cards.findIndex(c => c.id === cardId);
    if (index !== -1) {
      const newComment: CommentModel = {
        id: this.cards[index].comments.length + 1,
        userId: userId,
        cardId: cardId,
        content: commentContent,
        createdAt: new Date().toISOString()
      };
      this.cards[index].comments.push(newComment);
    }
  }
  addLike(cardId: number): void {
    const index = this.cards.findIndex(c => c.id === cardId);
    this.cards[index].likes++;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    
    return `${hours}:${minutes} ${day}/${month}/${year}`;
  }
}
