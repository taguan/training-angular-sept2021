import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { CardColumnComponent } from './card-column/card-column.component';
import {ApiService} from './api/api.service';
import {HttpClientModule} from '@angular/common/http';
import { NewCardFormComponent } from './new-card-form/new-card-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardColumnComponent,
    NewCardFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
