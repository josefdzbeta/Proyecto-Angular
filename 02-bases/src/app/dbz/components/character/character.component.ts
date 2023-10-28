 import { Component, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  @Output() // We use this decorator to emit an event to the parent component (main-page.component.ts)
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); // We use this event to send the new character to the parent component

  public character: Character = {
    name: '',
    power: 0
  };

  public emitCharacter(): void {
    console.log(this.character);

    if(this.character.name.trim().length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character.name = this.character.name.trim();
    this.character.power = this.character.power;
  }
}
