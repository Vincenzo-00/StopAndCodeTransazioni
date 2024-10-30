import { Component, Input } from '@angular/core';
import { Transactions } from '../data/type-transaioni';

@Component({
  selector: 'app-transazione-singola',
  templateUrl: './transazione-singola.component.html',
  styleUrl: './transazione-singola.component.css',
})
export class TransazioneSingolaComponent {
  @Input()
  transaction?: Transactions;
}
