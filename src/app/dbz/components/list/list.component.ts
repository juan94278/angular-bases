import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/caracter.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onIdDelete: EventEmitter<string> = new EventEmitter();
  
  @Input()
  public characterList: Character[] = [];

  onDeleteCharacter(id?: string): void {
    if(!id) return;
    this.onIdDelete.emit(id);
  }

}
