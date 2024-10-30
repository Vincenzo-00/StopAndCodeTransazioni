import { Component } from '@angular/core';
import { Transactions } from '../data/type-transaioni';
import { TRANSACTIONS } from '../data/transazioni';

@Component({
  selector: 'app-lista-transazioni',
  templateUrl: './lista-transazioni.component.html',
  styleUrl: './lista-transazioni.component.css'
})
export class ListaTransazioniComponent {

  transactions: Transactions[] = TRANSACTIONS;

}
