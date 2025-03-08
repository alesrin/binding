import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
@Input() producto: string = ""
@Output() evento_favorito = new EventEmitter<string>()

//Método que nos permita hacer un producto favorito
marcarComoFavorito(){
  if (this.producto){
    this.evento_favorito.emit(this.producto)
  }
}
}
/*
1- El usuario hace click sobre un ul y se recoge en la propiedad "producto_seleccionado" el item.nombre de ese ul
2- El componente hijo recibe el valor de "producto_seleccionado" a través de la propiedad "producto" y lo pinta en el template, además muestra el botón "marcar como favorito"
3- Cuando el usuario hace click sobre el botón "marcar como favorito", se emite un evento del componente hijo al padre que le envia el valor recibimo de "producto"
4- El padre recibe del componente hijo el evento "producto favorito que emite "producto" como un string" y desencadena el método del padre recibirNotificacion()
*/
