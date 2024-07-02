import { Injectable } from '@angular/core';
import { CoffeeInfo, coffeeLoad } from './coffee.model';

@Injectable({
	providedIn: 'root',
})
export class CoffeeDataServices {
        coffeeLoad: CoffeeInfo[];
        constructor() {
            this.coffeeLoad = coffeeLoad;
        }
    
        private coffeeInfos: any = [];

        addCoffeeInfo(coffeeInfo: CoffeeInfo){
            this.coffeeInfos.push(coffeeInfo);
            console.log(`coffee ${coffeeInfo.brand} added to the database`)
        }

        getAllBeans(): CoffeeInfo[] {
            return this.coffeeLoad;
        }
    
        findById(id: number): CoffeeInfo | undefined {
            return this.coffeeLoad.find((coffeeInfo) => coffeeInfo.id === id);
        }
    
        findByBrand(brandName: string): CoffeeInfo[] | undefined {
            return this.coffeeLoad.filter((coffeeInfo) => coffeeInfo.brand === brandName);
        }
    }
    