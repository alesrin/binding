import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto/producto.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';



@NgModule({
  declarations: [
    ProductoComponent,
    ListadoProductosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductoComponent,
    ListadoProductosComponent]
})
export class EcommerceModule { }
