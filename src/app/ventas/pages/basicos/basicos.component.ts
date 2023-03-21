import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {
  nombreLower: string = 'juan';
  nombreUpper: string = 'JUAN';
  nombreCompleto: string = 'jUan DuaRTe';

  fecha: Date = new Date(); // el dia de hoy
}
