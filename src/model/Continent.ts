import { Country } from "./Country";

export class Continent {
    public name: string
    public nbSlots: number
    public countries: Country[]

    constructor(name: string, nbSlots: number, countries: Country[] = []) {
        this.name = name
        this.nbSlots = nbSlots
        this.countries = countries
    }
}