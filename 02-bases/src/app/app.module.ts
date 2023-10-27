import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,

  ], // Components, directives and pipes go in declarations
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ], //Modules always go in imports
  providers: [], // Services go in providers
  bootstrap: [AppComponent] // This is the root component
})
export class AppModule { }
