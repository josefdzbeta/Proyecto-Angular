import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule({
  exports: [
    ListComponent,
    HeroComponent,
  ], // Exportamos el componente para poder usarlo en otros módulos
  declarations: [
    ListComponent,
    HeroComponent,
  ],
  imports: [
    CommonModule // this module allow us to use the ngFor, ngIf, etc. directives in the html of the components
  ],
})
export class HeroesModule {}


