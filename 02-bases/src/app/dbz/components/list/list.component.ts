import { Component, Input, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() // This decorator is used to receive data from the parent component (main-page.component.ts)
  public characterList: Character[] = [{
    name: 'trunk',
    power: 10
  }]

  // onDeleteId
  @Output() // This decorator is used to emit an event to the parent component (main-page.component.ts)
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string): void {
    //Emitir el Id del personaje a eliminar
    if (!id) return; // If the id is not defined, we return
    this.onDelete.emit(id);
  }

  //input is used to receive data from the parent component, output is used to emit an event to the parent component
}

