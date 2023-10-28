import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  constructor(private dbzService : DbzService){ }// We use the constructor to inject the service

  get characters(): Character[]{
    return [...this.dbzService.characters];
    } // We use this getter to get the characters from the service. all getters are functions that return a value
  onDeleteCharacter(id: string):void{
    this.dbzService.deleteCharacterById(id);
  }
  onNewCharacter(character:Character):void{

    this.dbzService.addCharacter(character);}

  }
