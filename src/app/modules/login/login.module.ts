import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ResultadosComponent } from './resultados/resultados.component';
import { LogotipoComponent } from './logotipo/logotipo.component';




@NgModule({
  declarations: [
    FormComponent,
    ResultadosComponent,
    LogotipoComponent
  ],
  imports: [
    CommonModule,
    //1.- Lo importo en el módulo raíz
    //2.- Ya puedo importarlo en cualquier otro módulo de mi aplicación. Si tengo componentes que dependan directamente del módulo raíz, solo lo tengo que importar en el módulo raíz y el componente ya lo puede utilizar
    FormsModule,

    /* APP DEPENDIENTE DE MÓDULO
    app.module.ts -> importo FormsModule
        Login.Module.ts -> importo FormsModule
          form.component.ts
          login.component.ts
          politica.component.ts
        Register.module.ts -> importo FormsModule
        */

    /* APP AUTÓNOMA
    app.component.ts -> importo FormsModule
    form.component.ts -> importo FormsModule
    login.component.ts  -> importo FormsModule
    */



  ],
  exports: [FormComponent,   ResultadosComponent]
})
export class LoginModule { }
