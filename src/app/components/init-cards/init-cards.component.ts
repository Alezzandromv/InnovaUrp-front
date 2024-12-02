import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-init-cards',
  standalone: false,
  
  templateUrl: './init-cards.component.html',
  styleUrl: './init-cards.component.css'
})
export class InitCardsComponent {

  @Input() imagenRef!: string;
  @Input() tituloRef!: string;
  @Input() desRef!: string;
}
