import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent {
productos: any[] = [
  {nombre: "Mackbook Pro", precio: 2000},
  {nombre: "Imac", precio: 4000},
  {nombre: "HP", precio: 1500}
]
producto_seleccionado: string = ""
// Método que notifique al padre cuando el usuario elija un producto
recibirNotificacion(producto: string){
  alert("El producto " + producto + " se ha marcado como favorito")
}
}


/*
1- El usuario selecciona un producto en el componente padre
2- El componente recibe el producto y lo muestra en la vista
3- El usuario marca el producto como favorito en el componente hijo
4- Se envía un evento desde el hijo al padre con el producto favorito y el padre emite un alert

*/
