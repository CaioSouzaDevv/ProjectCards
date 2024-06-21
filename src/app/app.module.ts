import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { ClientInfosCardComponent } from './components/client-infos-card/client-infos-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { CardItemComponent } from './components/card-item/card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceCardComponent,
    ClientInfosCardComponent,
    CreditCardComponent,
    DebitCardComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
