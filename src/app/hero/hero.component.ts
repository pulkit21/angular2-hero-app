import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [HeroService]
})
export class HeroComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  title = 'Tour of Heroes';

  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
    // this.getHeroesSlowly(); //We can simulate a slow connection
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  // We can simulate a slow connection
  // getHeroesSlowly(): void {
  //   this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  // }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
