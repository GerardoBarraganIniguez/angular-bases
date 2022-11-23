import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/naruto.interface";

@Injectable()
export class NarutoService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Naruto',
          poder: 800
        },
        {
          nombre: 'Sasuke',
          poder: 750
        }
    ];
    
    get personajes(): Personaje[]{
        return [...this._personajes];
    }
    
    constructor() {}

    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }
}