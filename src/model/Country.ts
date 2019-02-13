import { Player } from "./Player";
import uniq from 'lodash/uniq'
import { Continent } from "./Continent";
import { ContinentName } from "./PlagueInc";

export class Country {
    public name: string
    public continent: ContinentName
    public nbSlots: number
    public infections: Player[]
    public hasAirport: boolean
    public hasPort: boolean
    public hasColdResistance: boolean
    public hasHeatResistance: boolean
    public isStartCountry: boolean

    constructor(    
        name: string, continent: ContinentName, nbSlots: number, 
        hasAirport = false, hasPort = false, hasColdResistance = false, hasHeatResistance = false, 
        isStartCountry = false,
        infections: Player[] = []
    ) {
        this.name = name
        this.continent = continent
        this.nbSlots = nbSlots
        this.hasAirport = hasAirport
        this.hasPort = hasPort
        this.hasColdResistance = hasColdResistance
        this.hasHeatResistance = hasHeatResistance
        this.infections = infections
        this.isStartCountry = isStartCountry
    }

    addInfection(player: Player, nb = 1){
        if(this.infections.length + nb > this.nbSlots){
            throw Error('try to add too many infections')
        }
        let newInfections = new Array(nb).fill(player)
        this.infections = this.infections.concat(newInfections)
    }
    removeInfection(player: Player, nb = 1){
        // TODO
    }
    replaceInfection(toReplace: Player, by: Player){

    }

    getInfectors(): Player[] {
        return uniq(this.infections)
    }

    getTopInfectors(): Player[] {
        return []
    }

    isFullyInfected(){
        return this.infections.length === this.nbSlots
    }
    isEmpty(){
        return this.infections.length === 0
    }
}