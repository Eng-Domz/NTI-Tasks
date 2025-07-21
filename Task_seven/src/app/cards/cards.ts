import { Component, OnInit } from '@angular/core';
import { Card } from '../Models/card.model';
import { CardService } from '../Services/card.service';


@Component({
  selector: 'app-cards',
  standalone: false,
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class CardsComponent implements OnInit {
    cards: Card[] = [];
    constructor(private cardService: CardService) {}

    ngOnInit(): void {
        this.cards = this.cardService.getCards();
    }
    deleteCard(id: number): void {
        this.cards = this.cardService.deleteCard(id);
    }
    addCard(card: Card): void {
        this.cardService.addCard(card);
    }
    updateCard(card: Card): void {
        this.cardService.updateCard(card);
    }
} 