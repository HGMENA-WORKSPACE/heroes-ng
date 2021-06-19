import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroe';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() heroe: Heroe;
  constructor() {}

  ngOnInit(): void {}

  getHeroeButtonName() {
    return this.heroe ? 'HEROEAPP.WATCH' : 'HEROEAPP.BACK';
  }
}
