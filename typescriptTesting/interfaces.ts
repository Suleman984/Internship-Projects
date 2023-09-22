import { USERLEVEL } from './enums'
import { Price, Country } from './types'
export interface Review {
    name: string; 
    stars: number; 
    loyaltyUser: USERLEVEL; 
    date: string;   
}

export interface Property {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: Country
    }
    contact: [ number, string];
    isAvailable: boolean;
}
