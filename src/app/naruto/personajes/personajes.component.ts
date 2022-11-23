import { Component } from '@angular/core';
import { NarutoService } from '../services/naruto.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})

export class PersonajesComponent {

  get personajes(){
    return this.narutoService.personajes;
  }

  constructor(private narutoService: NarutoService){
    
  }
}
