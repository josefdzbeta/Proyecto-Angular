import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  } //get is a property of the class HeroComponent and it returns a string value (the name of the hero in uppercase)

  public getHeroInformation(): string {
    return `${this.name} - ${this.age}`;
  } //this is a method of the class HeroComponent and it returns a string value (the name and the age of the hero)

  public changeName(): void {
    this.name = 'Spiderman';
  } //this is a method of the class HeroComponent and it returns nothing (void) but it changes the name of the hero

  public changeAge(): void {
    this.age = 30;
  } //this is a method of the class HeroComponent and it returns nothing (void) but it changes the age of the hero

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
