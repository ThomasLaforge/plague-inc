import { Player } from "./Player";
import uniq from 'lodash/uniq'
export class Country {
    public name: string
    public nbSlots: number
    public infections: Player[]

    constructor(name: string, nbSlots: number, infections: Player[] = []) {
        this.name = name
        this.nbSlots = nbSlots
        this.infections = infections
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

    getInfectors(): Player[] {
        return uniq(this.infections)
    }

    getTopInfectors(): Player[] {
        return []
    }

    isFullyInfected(){
        return this.infections.length === this.nbSlots
    }
}