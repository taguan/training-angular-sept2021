import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../model/card';

@Component({
  selector: 'app-card-column',
  templateUrl: './card-column.component.html',
  styleUrls: ['./card-column.component.css']
})
export class CardColumnComponent implements OnInit {

  @Input()
  columnName: string | undefined;

  @Input()
  cards: Card[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
