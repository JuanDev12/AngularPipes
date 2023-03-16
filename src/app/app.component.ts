import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  nombre: string = 'Juan';
  valor: number = 1000;
  obj = {
    name: 'Juan',
    age: 21,
    experience: [
      {
        job: 'Software Engineer',
        time: '1 year',
      },
      {
        job: 'Fullstack Developer',
        time: '2 years',
      },
    ],
  };

  peliculas = [
    {
      titulo: 'Avengers',
      actores: ['Robert Downey Jr', 'Mark Ruffalo', 'Chris Evans'],
    },
    {
      titulo: 'Titanic',
      actores: ['Leonardo Dicaprio'],
    },
  ];

  mostrarNombre() {
    console.log(this.nombre);
  }
}
