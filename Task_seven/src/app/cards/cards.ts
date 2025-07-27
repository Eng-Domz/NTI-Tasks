import { Component, OnInit } from '@angular/core';
import { Card } from '../Models/card.model';
import { CardService } from '../Services/card.service';
import { UserService } from '../Services/user.service';
import { Comment as CommentModel } from '../Models/comment.model';


@Component({
  selector: 'app-cards',
  standalone: false,
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class CardsComponent implements OnInit {
    cards: Card[] = [];
    constructor(private cardService: CardService, private userService: UserService) {}

    ngOnInit(): void {
        this.cards = this.cardService.getCards();
    }
    deleteCard(id: number): void {
        this.cards = this.cardService.deleteCard(id);
    }
    addCard(): void {
        const titleField = document.getElementById("cardTitle") as HTMLInputElement;
        const bodyField = document.getElementById("cardBody") as HTMLTextAreaElement;
        const typeField = document.getElementById("cardType") as HTMLSelectElement;
        const imageField = document.getElementById("cardImage") as HTMLInputElement;
        const modal = document.getElementById('addCardModal') as HTMLElement;
        
        if (titleField && bodyField && typeField && imageField) {
            if (!titleField.value || !bodyField.value || !typeField.value || !imageField.value) {
                alert('Please fill in all fields');
                return;
            }
            const newCard: Card = {
                id: this.cards.length + 1,
                title: titleField.value,
                body: bodyField.value,
                image: imageField.value,
                type: typeField.value,
                userId: this.getCurrentUserId(),
                comments: [],
                likes: 0
            };
            this.cards.push(newCard);
            titleField.value = '';
            bodyField.value = '';
            typeField.value = '';
            imageField.value = '';
            
            if (modal) {
                const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
                if (bootstrapModal) {
                    bootstrapModal.hide();
                }
            }
        }
    }
    updateCard(card: Card): void {
        this.cardService.updateCard(card);
    }
    toggleLike(cardId: number): void {
        const like = document.getElementById(cardId.toString()) as HTMLElement;
        if (like) {
            like.classList.toggle('fa-regular');
            like.classList.toggle('fa-solid');
            this.cardService.addLike(cardId);
        }
    }
    showComments(cardId: number): CommentModel[] {
        return this.cardService.showComments(cardId);
    }
    addComment(cardId: number): void {
        const comment = document.getElementById("comment") as HTMLInputElement;
        this.cardService.addComment(cardId, comment.value, this.getCurrentUserId());
        comment.value = '';
    }

    formatDate(dateString: string): string {
        return this.cardService.formatDate(dateString);
    }

    getCurrentUserId(): number {
        const loggedUser = this.userService.getLoggedUser();
        return loggedUser?.id ?? 1;
    }   
} 