import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-card',
  standalone: false,
  
  templateUrl: './calendar-card.component.html',
  styleUrl: './calendar-card.component.css'
})
export class CalendarCardComponent {
  @Input() fechaEvento!:string;
  @Input() tituloEvento!: string;
  @Input() facultadEvento!: string;
  @Input() validezEvento!: string;
  @Input() horaEvento!: string;
  @Input() localEvento!: string;
  

  
}
