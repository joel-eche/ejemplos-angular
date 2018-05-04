import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activar: boolean): String {
    let salida = "";
    if (activar){
      for(let letra in value){
        salida += "*";
      }
      return salida;
    }
    return value;    
  }

}
