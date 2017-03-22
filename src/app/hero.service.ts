import { Injectable } from '@angular/core';
import { Hero } from './hero/hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // We can simulate a slow connection
  // getHeroesSlowly(): Promise<Hero[]> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(this.getHeroes()), 2000);
  //   });
  // }

}
