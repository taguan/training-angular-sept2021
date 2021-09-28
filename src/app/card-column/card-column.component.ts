import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../model/card';
import {CardService} from '../card.service';

@Component({
  selector: 'app-card-column',
  templateUrl: './card-column.component.html',
  styleUrls: ['./card-column.component.css']
})
export class CardColumnComponent implements OnInit {

  @Input()
  columnName: string | undefined;

  @Input()
  state: Card.StateEnum | undefined;

  cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
      this.refreshCards();


      this.cardService.newCardEventEmitter.subscribe((card) => {
        if (card.state === this.state) {
          this.refreshCards()
        }
      });
  }


  private refreshCards() {
    this.cardService.getCards(this.state as Card.StateEnum).subscribe(cardsFromServer => {
      this.cards = cardsFromServer;
    }, error => {
      console.log('Error when retrieving cards', error)
    });
  }
}
