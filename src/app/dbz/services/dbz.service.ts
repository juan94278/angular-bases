import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/caracter.interface';

@Injectable({
 providedIn: 'root'
})
export class DbzService {
 
 public caracters: Character[] = [
  {
   id: uuid(),
   name: 'Krillin',
   poder: 1000
  },
  {
   id: uuid(),
   name: 'Goku',
   poder: 9500
  },
  {
   id: uuid(),
   name: 'Vegeta',
   poder: 7500
  }
 ];

 onNewCharacter( character: Character ): void {
  const newCharacter: Character = {
   id: uuid(), ...character
  };
  this.caracters.push(newCharacter);
 }

 onDeleteCharacter(id: string): void {
   this.caracters = this.caracters.filter( character => character.id !== id );
 }
 
}