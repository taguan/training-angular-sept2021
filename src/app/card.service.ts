import { Injectable } from '@angular/core';
import {Card} from './model/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  todoCards: Card[] = [
    {
      title: 'Card 1',
      description: 'description of card 1'
    },
    {
      title: 'Card 2',
      description: 'description of card 1'
    },
    {
      title: 'Card 3',
      description: 'description of card 1'
    }
  ];

  inProgressCards: Card[] = [
    {
      title: 'Card 4',
      description: 'description of card 1'
    }

  ];

  doneCards: Card[] = [
    {
      title: 'Card 5',
      description: 'description of card 1'
    }
  ];

  constructor() { }


}
