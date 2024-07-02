import { NgFor } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoffeeInfo, coffeeLoad } from './coffee.model';
import { CoffeeDataServices } from './coffee.data.services';

@Component({
  selector: 'app-add-coffee-form',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './add-coffee-form.component.html',
  styleUrl: './add-coffee-form.component.css'
})

export class AddCoffeeFormComponent  {
  coffees : CoffeeInfo = {id: 0, brand: '', groundOrBeans:'', roast: ''} ;
//  id: number = 0;
//	brand: string = '';
//	roast: string = '';
//	groundOrBeans: string = '';
//	grind?: number;
//	singleOrigin?: boolean;
//	flavorNotes?: string;
  
  constructor(private CoffeeDataServices:CoffeeDataServices){
  }
  
  onSubmit(){
    this.CoffeeDataServices.addCoffeeInfo(this.coffees)
    console.log(this.coffees)
  }

  onReset(){
    
  }


//  ngOnInit(): void {
//    throw new Error('Method not implemented.');
//  }

}

//export enum RoastType {
//  LIGHT, 
//  MEDIUM, 
//  MEDIUMDARK,
//  DARK
//}

//groundOrBeans: GroundOrBeans = GroundOrBeans.BEANS ;

//export enum GroundOrBeans {
// GROUND,
// BEANS
//}