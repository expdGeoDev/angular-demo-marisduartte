export const coffeeLoad: CoffeeInfo[] = [
	{
		id: 1,
		brand: 'Kicking Horse',
		roast: 'dark',
		groundOrBeans: 'beans',
	},
	{
		id: 2,
		brand: 'Greenwood Lake Roasters',
		roast: 'medium',
		groundOrBeans: 'ground',
	},
	{
		id: 3,
		brand: 'Counter Culture',
		roast: 'light',
		groundOrBeans: 'beans',
	},
	{
		id: 4,
		brand: 'Starbucks',
		roast: 'medium',
		groundOrBeans: 'ground',
	},
];

export interface CoffeeInfo {
id: number;
brand: string;
roast: string;
groundOrBeans: string;
grind?: number;
singleOrigin?: boolean;
flavorNotes?: string;
}