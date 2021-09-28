import { Component, OnInit } from '@angular/core';
import {CardService} from '../card.service';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Card} from '../model/card';

@Component({
  selector: 'app-new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.css']
})
export class NewCardFormComponent implements OnInit {

  cardForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    description: new FormControl('', Validators.required)
  });

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  createCard(): void {
    if (this.cardForm.valid) {
      const card: Card = new Card(this.cardForm.get('title')?.value,
        this.cardForm.get('description')?.value,
        'to-do');
      this.cardService.createCard(card).subscribe();

    }
  }


}
