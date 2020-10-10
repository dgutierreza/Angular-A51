import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish } from 'src/app/interface';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  private _name:string;
  public _totalIngredients:number;
  public _winner:string;
  //AL USAR PRIVATE SE PUEDE LLAMAR AL COMPONENTE _TOTALINGREDIENTS 
  //PERO CON ERROR EN CONSOLA -- PREGUNTAR???

  @Input() set dish(value: Dish){
    this._name = this.generateName(value.name);
    this._totalIngredients = value.ingredients.length;
  }
 
  @Output() choose: EventEmitter<string> = new EventEmitter<string>
  ();

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
    return `${name}`;
  }
 
  notify(name:string):void{
    console.log('name-notify',name);
    this.choose.emit(name)
  }

}
