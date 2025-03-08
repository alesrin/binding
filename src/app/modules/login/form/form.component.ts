import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
nombre: string = "";
apellidos: string = "";
ciudad: string = "";

nombredos: string = ""
titulo: string = "Bienvenido a mi web"
titulo2: string = "Curso Angular 2025"
enlaceURL: string = "https://www.google.es"

idComponente: string = "segundo"
dinamicClass: string = "modoOscuro"
longitudInput: number = 8
valueInput: string = "introduce hasta 8 caracteres"
tipoInput: string = "text"
inputRequired: boolean = true
editContent: boolean = true
imageURL: string = "../../../../assets/Captura de pantalla 2025-03-08 a las 11.04.00.png"
imageWidth: number = 700
imageTitle: string = "Captura de pantalla"
esOculto: boolean = false
cambiante: boolean = true
darkTheme: boolean = false
checked: boolean = true


Cambiador(){
  this.titulo = "Esta es mi web cambiada"
  this.idComponente = "primero"
this.dinamicClass = "modoOscuro"
this.longitudInput = 16
this.valueInput = "introduce hasta 16 caracteres"
this.tipoInput = "number"
this.inputRequired = false
this.editContent = false
this.imageURL = "../../../../assets/Captura de pantalla 2025-03-08 a las 11.18.16.png"
this.imageWidth = 500
this.imageTitle = "Captura de pantalla de las 11:20"
this.cambiante = !this.cambiante
}
VolverInicio(){
  this.idComponente = "segundo"
  this.dinamicClass = "modoClaro"
  this.longitudInput = 8
  this.valueInput = "introduce hasta 8 caracteres"
  this.tipoInput = "text"
  this.inputRequired = true
  this.editContent = true
  this.imageURL = "../../../../assets/Captura de pantalla 2025-03-08 a las 11.04.00.png"
  this.imageWidth = 700
  this.imageTitle = "Captura de pantalla"
  this.esOculto = false
  this.cambiante = true

}

cambioModo() {
if (this.darkTheme == true){
  this.dinamicClass = "modoClaro"

}
else {
  this.dinamicClass = "modoOscuro"
}
}
mensaje: string = ""
mensaje_uno: string = ""
tipo: string = ""
tipo_dos: string = ""
mostrarMensaje(){
this.mensaje = "Esto es un mensaje"
}
actualizarTexto(event: Event){ //event: evento de tipo objeto que recogemos.
// Elemento que ha disparado el evento
const elemento_valor = event.target as HTMLInputElement
this.mensaje_uno = elemento_valor.value
this.tipo = event.type
this.tipo_dos = elemento_valor.type
}
}
//1. Recogemos el dato de la vista utlizando [(ngModel)]="nombre_propiedad"
//2. Definimos esa propiedad en le controlador
//3. Llevamos el valor de la propiedad a la vista por interpolación
