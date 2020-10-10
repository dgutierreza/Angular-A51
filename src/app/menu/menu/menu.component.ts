import { Component, OnInit } from '@angular/core';
import { Customer, Dish } from 'src/app/interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  name = 'Diego';

  dish: Dish;
  customer: Customer;

  dishes: Dish[] = [
    {
      name: 'ceviche',
      ingredients: [{ name: 'limon', qty: 8 }, { name: 'pescado', qty: 2 }],
    },
    {
      name: 'arroz con pollo',
      ingredients: [{ name: 'arroz', qty: 1 }, { name: 'pollo', qty: 2 }],
    },
    {
      name: 'pollo a la brasa',
      ingredients: [{ name: 'papas', qty: 5 }, { name: 'pollo', qty: 2 }],
    },
  ];
  constructor() { 
    this.name;
    this.listDishes();
  }

  ngOnInit(): void {
  }
  listDishes():void{
    this.dishes.forEach((dish)=>{
      console.log(dish);
    });
  }

}
