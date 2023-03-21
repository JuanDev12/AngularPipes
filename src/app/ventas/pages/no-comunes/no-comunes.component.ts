import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent {
  //i18nSelect
  nombres: string[] = ['Juan', 'Karen'];
  nombre: string = 'Juan';
  genero: string = 'masculino';

  invitacionMapping = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Jesus', 'Karen', 'Juan'];
  clientesMapping = {
    '=0': 'no tenemos',
    '=1': 'tenemos un cliente',
    '=2': `tenemos 2 clientes esperando`,
    other: 'tenemos # clientes esperando',
  };

  cambiarCliente() {
    if (this.nombre === this.nombres[0]) {
      this.nombre = this.nombres[1];
      this.genero = 'femenino';
    } else {
      this.nombre = this.nombres[0];
      this.genero = 'masculino';
    }
  }

  agregar() {
    this.clientes.push('Hola');
    console.log(this.clientes);
  }

  eliminar() {
    this.clientes.pop();
    console.log(this.clientes);
  }
}
