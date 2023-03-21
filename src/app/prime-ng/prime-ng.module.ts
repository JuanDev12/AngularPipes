import { NgModule } from '@angular/core';

// Modulos de PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  exports: [ButtonModule, CardModule, FieldsetModule, MenubarModule],
})
export class PrimeNgModule {}
