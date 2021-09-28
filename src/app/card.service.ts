import {EventEmitter, Injectable} from '@angular/core';
import {Card} from './model/card';
import {ApiService} from './api/api.service';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  public newCardEventEmitter = new EventEmitter<Card>();

  constructor(private apiService: ApiService) { }


  getCards(state: Card.StateEnum): Observable<Card[]> {
    return this.apiService.cardsGet(state);
  }

  createCard(card: Card): Observable<Card> {
    return this.apiService.cardsPost(card)
      .pipe(
        map(card => {
          this.newCardEventEmitter.emit(card);
          return card;
        })
      );
  }

}
