import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-archivos-card',
  standalone: false,
  
  templateUrl: './archivos-card.component.html',
  styleUrl: './archivos-card.component.css'
})
export class ArchivosCardComponent {

  @Input() tituloArchivo!: string;
  @Input() autorArchivo!: string;
  @Input() cursoArchivo!: string;
  @Input() carreraArchivo!: string;
  @Input() valoracionArchivo!: string;

}
