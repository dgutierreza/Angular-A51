import { PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Country } from '@app/models';
import * as countriesJson from './../../assets/countries.json';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  providers:[UpperCasePipe,PercentPipe]
})
export class CountriesComponent implements OnInit {

  selected: Country;
  countries: Country[];
  my_number:number = 66;
  constructor(private upperCasePipe:UpperCasePipe,private percentPipe:PercentPipe) { 
    this.selected = countriesJson[10];
    console.log(this.selected);
  }

  ngOnInit(): void {
  }

  send(name:string):void{
    console.log('antes pipe',name);
    name = this.upperCasePipe.transform(name);
    console.log('despues pipe',name);
  }
  send2(my_number:number):void{
    console.log('antes pipe',my_number);
   let new_number = this.percentPipe.transform(my_number);
    console.log('despues pipe',new_number);
  }

}
