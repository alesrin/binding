import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
// Vas a recibir unas propiedades de tu padre directo (del componente en el que estás contenido)
@Input() nombre: string = ""
@Input() apellidos: string = ""
@Input() ciudad: string = ""
}
