import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ], // Exportamos el componente para poder usarlo en otros módulos
})
export class CounterModule {} 
