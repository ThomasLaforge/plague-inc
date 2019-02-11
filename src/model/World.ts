import { Continent } from "./Continent";
import { DEFAULT_CONTINENTS } from "./PlagueInc";

export class Word {

    public continents: Continent[]

    constructor(continents = DEFAULT_CONTINENTS) {
        this.continents = continents
    }
}