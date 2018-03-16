import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar'
})
export class TruncarPipe implements PipeTransform {

  transform(texto: string, limit = 10): any {
    let out: string;

    if (texto.length > limit) {
      const textoTrim = texto.substr(0, limit);
      out = textoTrim.substr(0, Math.min(textoTrim.length, textoTrim.lastIndexOf(' '))) + ' [...]';
    } else {
      out = texto;
    }
    return out;
  }
}
