import {Component} from '@angular/core';
import {CardService} from './card.service';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(public cardService: CardService) {

  }

}
