import { Component, Input, OnInit } from '@angular/core';
import { Dish } from 'src/app/interface';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  private _name:string;
  public _totalIngredients:number;
  //AL USAR PRIVATE SE PUEDE LLAMAR AL COMPONENTE _TOTALINGREDIENTS 
  //PERO CON ERROR EN CONSOLA -- PREGUNTAR???

  @Input() set dish(value: Dish){
    console.log('val',value.ingredients.length);
    this._name = this.generateName(value.name);
    this._totalIngredients = value.ingredients.length;
  }

  get name():string{
    return this._name;
  }
  get totalngredients():number{
    return this._totalIngredients;
  }

  /*@Input() set name(value: string){
    this._name = this.generateName(value);
    console.log('::',this._name);
  }*/
  constructor() { }

  ngOnInit(): void {
  }

  generateName(name:string): string{
    return `El nombre es:${name}`;
  }

}
