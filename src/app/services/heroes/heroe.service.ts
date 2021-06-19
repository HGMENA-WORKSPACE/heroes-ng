import { Injectable } from '@angular/core';
import { Heroe } from '../../interface/heroe';

@Injectable()
export class HeroeService {
  constructor() {}

  reloadHeroes(): Heroe[] {
    return [];
  }

  loadHeroe(id: number): Heroe {
    return undefined;
  }
}
