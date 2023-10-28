import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface'; // do not import interfaces in modules, import them in components

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },
  {name: 'Goku',
  power: 15000
  },
  {
    name: 'Vegeta',
    power: 8500
  },{
    name: 'Gohan',
    power: 10000
  }
  ];

  onNewCharacter(character:Character):void{
    this.characters.unshift(character);
  } // We use this method to receive the new character from the child component (character.component.ts) and add it to the array of characters (this.characters) in this component (main-page.component.ts)

  onDeleteId(index:number):void{
    this.characters.splice(index,1);
  }
}
