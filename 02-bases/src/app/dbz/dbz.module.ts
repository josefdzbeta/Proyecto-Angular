import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    CharacterComponent,
  ],
  imports: [
    CommonModule, // We import this module to use ngIf directive
    FormsModule, // We import this module to use ngModel directive
  ],
  exports: [
    MainPageComponent// We export this component to use it in app.module.ts
  ]
})
export class DbzModule { }
