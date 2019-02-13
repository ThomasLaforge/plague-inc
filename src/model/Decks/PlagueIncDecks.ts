import { Deck } from "./Deck";
import { Event } from "../Event";
import { Country } from "../Country";
import { TraitCard } from "../TraitCard";

export class EventDeck extends Deck<Event> {

    constructor(deck: Event[] = [], discard: Event[] = []){
        super(deck, discard)
    }

    initDeck(){
        // this.deck = 
    }

}

const countriesDatas = require('../../datas/countries.json')
let ALL_COUNTRIES: Country[] = countriesDatas.reduce( (allCountries: Country[], continent: any) => {
    const continentCountries = continent.countries.map( (c: any) =>
        new Country(
            c.name, continent.continentName, c.nbSlots,
            !!c.hasAirport, !!c.hasPort, !!c.hasColdResistance, !!c.hasHeatResistance,
            !!c.isStartCountry    
        )
    )
    return allCountries.concat(continentCountries)
}, []);

export class CountryDeck extends Deck<Country> {

    constructor(deck: Country[] = [], discard: Country[] = []){
        super(deck, discard)
    }

    initDeck(){
        this.arrayDeck = ALL_COUNTRIES
        this.arrayDiscard = []
        this.shuffle()
    }

}

const traitsDatas = require('../../datas/traits.json')
let ALL_TRAITS: TraitCard[] = traitsDatas.reduce( (allTraits: TraitCard[], def: any) => {
    let toAdd: string[] = Array.isArray(def.name) ? def.name : [def.name]
    return allTraits.concat(toAdd.map( (traitName) =>
        new TraitCard(traitName, def.traits, def.cost)
    ))
}, []);

export class TraitDeck extends Deck<TraitCard> {

    constructor(deck: TraitCard[] = [], discard: TraitCard[] = []){
        super(deck, discard)
    }

    initDeck(){
        this.arrayDeck = ALL_TRAITS
        this.arrayDiscard = []
        this.shuffle()
    }

}
