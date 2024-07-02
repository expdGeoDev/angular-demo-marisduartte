import { NgFor } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoffeeDataService } from '../coffee-data.service';

@Component({
  selector: 'app-add-coffee-form',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './add-coffee-form.component.html',
  styleUrl: './add-coffee-form.component.css'
})

export class AddCoffeeFormComponent implements OnInit {
 
  id: number = 0;
	brand: string = '';
	roast: string = '';
	groundOrBeans: string = '';
	grind?: number;
	singleOrigin?: boolean;
	flavorNotes?: string;

  constructor(){}
  
  onSubmit(){
    console.log()
  }

  onReset(){
    
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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