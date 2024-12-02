import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eventos-card',
  standalone: false,
  
  templateUrl: './eventos-card.component.html',
  styleUrl: './eventos-card.component.css'
})
export class EventosCardComponent {
  @Input() fechaEvento!: string;
  @Input() tituloEvento!: string;
  @Input() tipoEvento!: string;
}
