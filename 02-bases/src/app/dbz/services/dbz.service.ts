import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
  power: 15000
  },

  {
    id: uuid(),
    name: 'Vegeta',
    power: 8500
  },{
    id: uuid(),
    name: 'Gohan',
    power: 10000
  }
  ];

  addCharacter(character:Character):void{

    const newCharacter: Character  = {...character, id: uuid()};
    this.characters.unshift(character);
  } // We use this method to receive the new character from the child component (character.component.ts) and add it to the array of characters (this.characters) in this component (main-page.component.ts)

  // onDeleteId(index:number):void{
  //   this.characters.splice(index,1);
  // }
  deleteCharacterById(id:string):void{
    // if(!id) return; // If the id is not defined, we return

    this.characters = this.characters.filter(character => character.id !== id);
  }
} // This is a service, it is a class that can be injected in other components or services
